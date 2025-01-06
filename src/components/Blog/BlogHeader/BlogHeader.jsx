"use client"
import Image from "next/image";
import Link from "next/link";
import styles from './blogHeader.module.css';
import backIcon from '../../../assests/Blog/backIcon.svg';

const BlogHeader=({ data })=>{
    return(
 
            <div className={styles.headerInfoContanier}>
                <div className={styles.InfoContanier}>
                  <div className={styles.gobackContainer}>
                    <div className={styles.gobackIconBox}>
                    <Image src={backIcon} alt="backIcon" className={styles.gobackIcon}/>
                    </div>
                   

                    <Link href={"/media/blogs"} target="_blank" className={styles.gobackLinkText} rel="noopener noreferrer" >
                        Back to Blogs
                    </Link>
                   </div>
                    <div className={styles.infoHeading}>
                        <p className={styles.infoHeadingMaintext}>
                           {data?.title || "Blog"} 
                         </p>
                         <p className={styles.infoHeadingSubtext}>{data?.BlogPitchLine}</p>
                    </div>
                
                </div>
           </div>      
      
    )
}
export default BlogHeader;