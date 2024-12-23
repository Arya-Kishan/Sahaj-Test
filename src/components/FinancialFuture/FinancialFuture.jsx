import styles from "./finance.module.css"
function FinancialFuture({ content }) {
    return (
        <>
            <div className={styles.mainBox}>
                {content &&
                    content?.MoreContent?.map((item, index) => {
                        return <>
                            <div key={index} className={styles.founderBox}>
                                <div className={styles.founderHeader}>
                                    <h3>{item.SmallMainTitle}</h3>
                                    <p>{item.SmallMainDescription}</p>

                                </div>
                                {item?.MainContent ? <>
                                    {item?.MainContent.map((ele, idx) => {
                                        return <>
                                            <div className={styles.founderInfo}>
                                                <div className={styles.founderDetails}>
                                                    <h3>{ele?.title}</h3>
                                                    <p>{ele?.Content}</p>
                                                    {ele?.Points ? <>
                                                    <ul>
                                                        {ele?.Points.map((list, i)=><li key={i}>{list}</li>)}
                                                    </ul>
                                                    </>:'' }
                                                </div>
                                                <img src={ele?.Image} alt="" srcset="" />

                                            </div>
                                            <div className={styles.featurIn}>
                                                <h3>Feature in</h3>
                                                <div className={styles.imageBox}>
                                                {ele?.ImageList?.length>0 ? <>
                                                    {ele.ImageList.map((imgs, imgIndex)=> <><img key={imgIndex} src={imgs} alt="" srcset="" /></>)}</>
                                                
                                                :""}
                                                </div>
                                            </div>
                                        </>

                                    })}

                                </> : ""}
                            </div>
                        </>
                    })
                }
            </div>
        </>
    )
}

export default FinancialFuture