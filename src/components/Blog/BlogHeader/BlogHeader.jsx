"use client"
import Image from "next/image";
import Link from "next/link";
import styles from './blogHeader.module.css';
import backIcon from '../../../assests/Blog/backIcon.svg';

const BlogHeader=()=>{
    return(
 
            <div className={styles.headerInfoContanier}>
                <div className={styles.InfoContanier}>
                  <div className={styles.gobackContainer}>
                    <div className={styles.gobackIconBox}>
                    <Image src={backIcon} alt="backIcon" className={styles.gobackIcon}/>
                    </div>
                   

                    <Link href="#" target="_blank" className={styles.gobackLinkText} rel="noopener noreferrer" >
                        Back to Blogs
                    </Link>
                   </div>
                    <div className={styles.infoHeading}>
                        <p className={styles.infoHeadingMaintext}>
                            Blog
                         </p>
                         <p className={styles.infoHeadingSubtext}>Undersand Your Risk Tolerance</p>
                    </div>
                
                </div>
           </div>
                
      
    )
}
export default BlogHeader;