"use client"
import Image from "next/image";
import DeatilsCards from "./DetailsCards";
import mainImage from '../../../assests/Blog/mainImage.webp';
import EllipseIcon from '../../../assests/Blog/EllipseIcon.webp';
import lindinimg from '../../../assests/Blog/linkdinimg.webp';
import instagramIcon  from '../../../assests/Blog/instagramIcon.webp';
import { FaShareAlt } from 'react-icons/fa';
import styles from './mainSection.module.css'


const MainSection=({data})=>{
   

    const Item = ({ content }) => {
        return (
          <div 
            dangerouslySetInnerHTML={{ __html: content }} 
          />
        );
      };

    return(
        <div className={styles.mainSectionContainer}>
            <div className={styles.maininfoContainer}>
                        <div className={styles.dateContainer}>
                            {data?.createdAt}
                        </div>
                        <div className={styles.blogHeadingContainer}>
                                <div className={styles.MainHeading}>
                                {data?.title}
                                </div>
                                <div className={styles.subHeading}>
                                 {data?.BlogPitchLine}
                                </div>
                                <div className={styles.tagsHolder}>
                                    { data?.Tags?.length>0 && data.Tags.map((tag,index)=>(
                                        <button className={styles.textButton} key={index}>{tag}</button>
                                
                                    )) }
                                </div>
                     </div>   </div>
                        <div className={styles.imgBox}>
                                <Image  src={mainImage} alt="MainBlogImage" className={styles.mainImg}/>
                        </div>
                        <div className={styles.descriptionContainer}>
                            
                                <div className={styles.detailsCards}>
                                  <div className={styles.descriptionContent}>
                                  <Item content={data?.Content} />
                                  </div>
                                
                        
                                <div className={styles.socials}>
                                    <div className={styles.followIcons}>
                                        <div className={styles.followText} >Follow Us</div>
                                        <Image  src={lindinimg} alt="LinkedinIconImage"/>
                                        <Image  src={instagramIcon} alt="instagramIconImage"/>
                                        <Image  src={EllipseIcon} alt="EllipseIconImage"/>
                                    </div>
                                    <div className={styles.shareIcons}>
                                     <FaShareAlt  size={24}/>
                                    </div>
                                </div>
                        </div>
                 
               
             </div>
        </div>
    )
}
export default MainSection;