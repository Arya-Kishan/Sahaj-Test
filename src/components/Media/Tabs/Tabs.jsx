import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import TabContent from "../TabContent/TabContent";
import { mediaData } from "../data";
import { FaSearch } from "react-icons/fa";
import styles from "./tabs.module.css";

const tabs = [
  { id: "press-coverage", label: "Press Coverage" },
  { id: "podcast", label: "Podcast" },
  { id: "video", label: "Video Channels" },
  { id: "blogs", label: "Blogs" },
  { id: "customers", label: "SM's Customers in Media" },
];

const Tabs = ({filtersData={}}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { path } = useParams();
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
   
    if (path && tabs.some((tab) => tab.id === path)) {
      setActiveTab(path);
    } else if (!path && !pathname.includes(tabs[0].id)) {
      router.push(`/media/${tabs[0].id}`);
    }

  
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("search") || "";
    setSearchQuery(query);
  }, [path, router, pathname]);

  useEffect(() => {
    
    if (searchQuery) {
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("search", searchQuery);
      router.push(`${pathname}?${urlParams.toString()}`, undefined, {
        shallow: true,
      });
    }
  }, [searchQuery, pathname, router]);

  const handleTabChange = (tabId) => {
    if (tabId !== activeTab) {
      router.push(`/media/${tabId}`);
    }
  };

  const handleSearchToggle = () => {
    if (isSearching) {
      setSearchQuery("");
    }
    setIsSearching(!isSearching);
  };

  const filteredContent = mediaData
  const displayContent = filteredContent.length > 0 ? filteredContent : [{ message: "No content found" }];

  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        <div className={styles.tabsHeader}>
          <p className={styles.Heading}>
            {isSearching && searchQuery
              ? `Search results for "${searchQuery}"`
              : "Media"}
          </p>
          <div className={styles.searchBox}>
            {isSearching && (
              <input
                type="text"
                placeholder="Type something..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

      {displayContent[0]?.message ? (
        <div>{displayContent[0]?.message}</div>
      ) : (
        <div className={styles.tabsContentContainer}>
          <TabContent
            data={displayContent}
            activeTab={activeTab}
            isSearching={isSearching}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filtersData={filtersData}
          />
        </div>
      )}
    </div>
  );
};

export default Tabs;
