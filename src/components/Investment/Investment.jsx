import styles from "./Investment.module.css";
import Image from "next/image";

function Investment({ content }) {
    return (
        <div className={styles.mainContainer}>
            {content?.Content?.map((ele, index) => (
                <div key={index} className={styles.section}>
                    <div className={styles.heading}>
                        <p className={styles.SmallMainTitle}>{ele?.SmallMainTitle}</p>
                        <p className={styles.SmallDescription}>{ele?.SmallDescription}</p>
                    </div>

                    {ele?.MainContent?.map((item, itemIndex) => (
                        <div key={itemIndex} className={styles.subSection}>

                            <p className={styles.subHeader}>{item?.title}</p>
                            {item?.Content && <p className={styles.subContent}>{item?.Content}</p>}
                            <div  className={`${styles.contentContainer} ${itemIndex % 2 !== 0 ? styles.rowreversecontainer : ''}`}>
                            <div className={`${styles.pointbox} ${itemIndex % 2 !== 0 ? styles.rowreverse : ''}`}>
                                <div className="">
                                <h4 className={styles.subHeader} >{item?.title}</h4>
                                
                                    {item?.Points?.length > 0 && (
                                        <ul className={styles.listBox}>
                                            {item.Points.map((point, pointIndex) => (
                                                <li key={pointIndex}>{point}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                <div className={styles.imageBox}>
                                    {item?.Image && (
                                        <Image
                                            src={item.Image}
                                            alt={item.title}
                                            className={styles.image}
                                            width={470}
                                            height={250}
                                           
                                        />
                                    )}
                                </div>
                            </div>
                            <div className={styles.description}>some contrnt ssssssssssssssssssssssssssssssssssss</div>
                            </div>
                
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Investment;
