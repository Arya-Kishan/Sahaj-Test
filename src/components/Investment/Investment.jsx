import styles from "./Investment.module.css";

function Investment({ content }) {
    return (
        <div className={styles.mainContainer}>
            {content?.Content?.map((ele, index) => (
                <div key={index} className={styles.section}>
                    <div className={styles.heading}>
                        <h3>{ele?.SmallMainTitle}</h3>
                        <p>{ele?.SmallDescription}</p>
                    </div>

                    {ele?.MainContent?.map((item, itemIndex) => (
                        <div key={itemIndex} className={styles.subSection}>

                            <h4 className={styles.subHeader}>{item?.title}</h4>
                            {item?.Content && <p>{item?.Content}</p>}
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
                                        <img
                                            src={item.Image}
                                            alt={item.title}
                                            className={styles.image}
                                        />
                                    )}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Investment;
