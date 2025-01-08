"use client";

import { useEffect} from "react";
import { useRouter, usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab, setSearchQuery, setFilteredData, setIsSearching,clearSearch } from "../../../store/slices/mediaSlice";
import { FaSearch, FaTimes } from "react-icons/fa";
import styles from "./tabs.module.css";
import TabContent from "../TabContent/TabContent";

const tabs = [
  { id: "customersInMedia", label: "Client Story" },
  { id: "videoChannel", label: "Video" },
  { id: "podcast", label: "Podcast" },
  { id: "pressCoverage", label: "Press" },
  { id: "blogs", label: "Blog" },
];

const Tabs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { path } = useParams();
  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.media.activeTab);
  const searchQuery = useSelector((state) => state.media.searchQuery);
  const mediaData = useSelector((state) => state.media.mediaData);
  const filteredData = useSelector((state) => state.media.filteredData);
  const isSearching = useSelector((state) => state.media.isSearching);

 
  useEffect(() => {

      if (path && tabs.some((tab) => tab.id === path)) {
        dispatch(setActiveTab(path));
      } else if (!path && !pathname.includes(tabs[0].id)) {
        router.push(`/media/${tabs[0].id}`);
      }
    
      const urlParams = new URLSearchParams(window.location.search);
      const query = urlParams.get("search") || "";
      dispatch(setSearchQuery(query)); 
  }, [path, router, pathname, dispatch]);

  useEffect(() => {
    if (searchQuery) {
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("search", searchQuery);
      router.push(`${pathname}?${urlParams.toString()}`, undefined, { shallow: true });
    }
    dispatch(setSearchQuery(searchQuery)); 
  }, [searchQuery, pathname, router, dispatch]);

//search object will include all the keys of data, even only few keys are displaying in UI 
  useEffect(() => {
    const filtered = mediaData[activeTab]?.filter((item) => {
      return Object.keys(item).some((key) => {
        const value = item[key];
        return (
          typeof value === "string" &&
          value.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
    });
  
    if (searchQuery) {
      dispatch(setFilteredData(filtered || []));
    } else {
      dispatch(setFilteredData([]));
    }
  }, [searchQuery, activeTab, mediaData, dispatch]);
  
 
  const handleTabChange = (tabId) => {
    
    if (tabId !== activeTab) {
        dispatch(setActiveTab(tabId));
        router.push(`/media/${tabId}`);
     }
     
  };
  
  
  const handleSearchToggle = () => {
    dispatch(setIsSearching(!isSearching));
  };

  const activeTabData = mediaData[activeTab] || [];
  let displayContent;

  if (isSearching && searchQuery) {
    displayContent = filteredData;
  } else {
    displayContent = activeTabData;
  }
  
  const dynamicTabs = isSearching ? [{ id: "All", label: "All" }, ...tabs] : tabs;

  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        <div className={styles.tabsHeader}>
          <p className={styles.Heading}>
            {isSearching && searchQuery ? `Search results for "${searchQuery}"` : "Media"}
          </p>
          <div className={styles.searchBox}>
            {isSearching && (
              <input
                type="text"
                placeholder="Type something..."
                value={searchQuery}
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                className={styles.searchInput}
              />
            )}
            <div onClick={handleSearchToggle} role="button">
              <FaSearch size={24} />
            </div>
            {isSearching && searchQuery && (
              <div onClick={()=>dispatch(clearSearch())} role="button" className={styles.clearSearch}>
                <FaTimes size={20} />
              </div>
            )}
          </div>
        </div>

        <div className={styles.tabs}>
          {dynamicTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={activeTab === tab.id ? styles.activetabButton : styles.tabButton}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.tabsContentContainer}>
        {
          (isSearching && activeTab==="All") ? <TabContent
          activeTab={activeTab}
          isSearching={isSearching}
          searchQuery={searchQuery}
          setSearchQuery={dispatch(() => setSearchQuery())} 
          data={filteredData}  
          filtersData={filtersData}
        />:  <TabContent
        activeTab={activeTab}
        isSearching={isSearching}
        searchQuery={searchQuery}
        setSearchQuery={dispatch(() => setSearchQuery())} 
        data={displayContent}
      />
        }
      </div>
    </div>
  );
};

export default Tabs;

