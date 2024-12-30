import styles from "./finance.module.css";
import Image from "next/image";
import React from "react"
function FinancialFuture({ content }) {
    return (
        <>
            <div className={styles.mainBox}>
                {content &&
                    content?.MoreContent?.map((item, index) => ( 
                    <div key={index} className={styles.founderBox}>
                        <div className={styles.founderHeader}>
                            <p className={styles.SmallMainTitle} >{item.SmallMainTitle}</p>
                            <p className={styles.SmallMainDescription}>{item.SmallMainDescription}</p>

                        </div>
                        {item?.MainContent ? <>
                            {item?.MainContent.map((ele, idx) => {
                                return <React.Fragment key={idx}>
                                    <div className={styles.founderInfo}>
                                        <div className={styles.founderDetails}>
                                            <p className={styles.founderDetailsHeading}>{ele?.title}</p>
                                            <div className={styles.founderDetailsContentContainer}>
                                                <p>{ele?.Content}</p>
                                                {ele?.Points ? <>
                                                <ul>
                                                    {ele?.Points.map((list, i)=><li key={i}>{list}</li>)}
                                                </ul>
                                                </>:'' }
                                            </div>
                                            
                                        </div>
                                        <Image src={ele?.Image} alt="image" srcSet="" width={450} height={400} />
                                    </div>
                                    <div className={styles.featurIn}>
                                        <h3>Feature in</h3>
                                        <div className={styles.imageBox}>
                                        {ele?.ImageList?.length>0 ? <>
                                            {ele.ImageList.map((imgs, imgIndex)=> <><img key={imgIndex} src={imgs} alt="" srcset="" /></>)}</>
                                        
                                        :""}
                                        </div>
                                    </div>
                                </React.Fragment>

                            })}

                        </> : ""}
                    </div>))
                }
            </div>
        </>
    )
}

export default FinancialFuture