"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab, setSearchQuery } from "../../../store/slices/mediaSlice" // Import actions
import { FaSearch } from "react-icons/fa";
import styles from "./tabs.module.css";
import TabContent from "../TabContent/TabContent";

const tabs = [
  { id: "pressCoverage", label: "Press Coverage" },
  { id: "podcast", label: "Podcast" },
  { id: "videoChannel", label: "Video Channels" },
  { id: "blogs", label: "Blogs" },
  { id: "customersInMedia", label: "SM's Customers in Media" },
];

const Tabs = ({filtersData}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { path } = useParams();
  const dispatch = useDispatch();
  
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQueryState] = useState("");
  
  const activeTab = useSelector((state) => state.media.activeTab);
  const mediaData = useSelector((state) => state.media.mediaData);
  const filteredData = useSelector((state) => state.media.filteredData);

  useEffect(() => {
    if (path && tabs.some((tab) => tab.id === path)) {
      dispatch(setActiveTab(path));
    } else if (!path && !pathname.includes(tabs[0].id)) {
      router.push(`/media/${tabs[0].id}`);
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("search") || "";
    setSearchQueryState(query);
  }, [path, router, pathname, dispatch]);

  useEffect(() => {
    if (searchQuery) {
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("search", searchQuery);
      router.push(`${pathname}?${urlParams.toString()}`, undefined, { shallow: true });
    }

    
    dispatch(setSearchQuery(searchQuery));
  }, [searchQuery, pathname, router, dispatch]);

  const handleTabChange = (tabId) => {
    if (tabId !== activeTab) {
      router.push(`/media/${tabId}`);
      dispatch(setActiveTab(tabId));
    }
  };

  const handleSearchToggle = () => {
    if (isSearching) {
      setSearchQueryState("");
    }
    setIsSearching(!isSearching);
  };
 

  const activeTabData = mediaData[activeTab] || [];

  const displayContent = filteredData[activeTab] || activeTabData;
  
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
                onChange={(e) => setSearchQueryState(e.target.value)}
                className={styles.searchInput}
              />
            )}
            <div onClick={handleSearchToggle} role="button">
              <FaSearch size={24} />
            </div>
          </div>
        </div>

        <div className={styles.tabs}>
          {tabs.map((tab) => (
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

      {/* {displayContent.length === 0 ? (
        <div>No content found</div>
      ) : ( */}

        <div className={styles.tabsContentContainer}>
          <TabContent
            activeTab={activeTab}
            isSearching={isSearching}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQueryState}
            data={activeTabData}  
            filtersData={filtersData}
          />
        </div>

      {/* )} */}
    </div>
  );
};

export default Tabs;
