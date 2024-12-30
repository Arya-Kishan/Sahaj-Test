"use client"

import React, { useState } from 'react';
import styles from "./Investment.module.css";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { BsLink, BsMessenger } from 'react-icons/bs';
import EllipseIcon from  '../../assests/Blog/EllipseIcon.webp';
import lindinimg from '../../assests/Blog/linkdinimg.webp';
import instagramIcon from '../../assests/Blog/instagramIcon.webp';
import { FaShareAlt } from 'react-icons/fa';

const  Investment=({ content }) =>{
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [titleReverse, setTitleReverse]=useState(false)
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const shareToPlatform = (platform) => {
        const currentUrl = window.location.href;
        let shareUrl = '';
    
        switch (platform) {
          case 'copy':
            navigator.clipboard.writeText(currentUrl);
            alert('Link copied to clipboard!');
            return;
          case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
            break;
          case 'messenger':
            shareUrl = `https://www.facebook.com/dialog/send?link=${encodeURIComponent(currentUrl)}`;
            break;
          case 'email':
            shareUrl = `mailto:?subject=Check this out&body=${encodeURIComponent(currentUrl)}`;
            break;
          case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(currentUrl)}`;
            break;
          case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`;
            break;
          default:
            return;
        }
    
        window.open(shareUrl, '_blank');
      };
      console.log("the title isss",content)
      
    return (
        <div className={styles.mainContainer}>
            {content?.Content?.map((ele, index) => (
                <div key={index} className={styles.section}>
                    <div className={styles.heading}>
                        <p className={styles.SmallMainTitle}>{ele?.SmallMainTitle}</p>
                        <p className={styles.SmallDescription}>{ele?.SmallMainDescription}</p>
                    </div>

                    {ele?.MainContent?.map((item, itemIndex) => (
                        <div key={itemIndex} className={styles.subSection}>

{(item?.Points?.length === 0 && item?.ContentParagraph?.length === 0) && (
    <p className={`${styles.subHeader} ${item?.reverse ? styles.reverse : ''}`}>
        {item?.title}
    </p>
)}
                            {item?.Content && <p className={styles.subContent}>{item?.Content}</p>}
                            <div  className={`${styles.contentContainer} ${itemIndex % 2 !== 0 ? styles.rowreversecontainer : ''}`}>
                         { (item?.Points?.length > 0  || item?.ContentParagraph.length > 0) &&  <div className={`${styles.pointbox} ${itemIndex % 2 == 0 ? styles.rowreverse : ''}`}>
                                <div className={styles.ulContainer}>
                                <h4 className={styles.subHeader} >{item?.title}</h4>
                                
                                    {(item?.Points?.length > 0 )&& (
                                        <ul className={styles.listBox}>
                                            {item.Points.map((point, pointIndex) => (
                                                <li key={pointIndex}>{point}</li>
                                            ))}
                                        </ul>
                                    )}
                                     {( item?.ContentParagraph.length > 0)&& (
                                        <ul className={styles.listBox}>
                                            {item?.ContentParagraph.map((point, pointIndex) => (
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
                                            // width={470}
                                            // height={220}
                                          
                                            // width={1200} 
                                            // height={800} 
                                           // unoptimized
                                          
                                           
                                        />
                                    )}
                                </div>
                            </div> }  

                      
                        
                            {/* <div className={`${styles.pointbox} ${itemIndex % 2 !== 0 ? styles.rowreverse : ''}`}>
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
                            </div> */}
                            {/* <div className={styles.description}>some contrnt ssssssssssssssssssssssssssssssssssss</div> */}
                            </div>
                
                        </div>
                    ))}
                </div>
            ))}
       <div className={styles.socials}>
                        <div className={styles.followIcons}>
                            <div className={styles.followText} >Follow Us</div>
                          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                                         <Image src={lindinimg} alt="Linkedin Icon" />
                                                     </a>
                                                     <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                                         <Image src={instagramIcon} alt="Instagram Icon" />
                                                     </a>
                                                     <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                                         <Image src={EllipseIcon} alt="Ellipse Icon" />
                                                     </a>
                        </div>
                        <div className={styles.shareIcons} onClick={toggleModal}>
                            <FaShareAlt size={24} />

                             {isModalOpen && (
                                <div className={styles.modalOverlay} onClick={toggleModal}>
                                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                                        <button className={styles.closeButton} onClick={toggleModal}>
                                            <div className={styles.closeIcon}>X</div>
                                        </button>
                                        <h3 className={styles.title}>Share</h3>
                                        <ul className={styles.shareOptions}>
                                            <li onClick={() => shareToPlatform('copy')}><BsLink /> Copy link</li>
                                            <li onClick={() => shareToPlatform('facebook')}><FaFacebookF /> Share to Facebook</li>
                                            <li onClick={() => shareToPlatform('messenger')}><BsMessenger /> Share to Messenger</li>
                                            <li onClick={() => shareToPlatform('email')}><FaEnvelope /> Share to Email</li>
                                            <li onClick={() => shareToPlatform('whatsapp')}><FaWhatsapp /> Share to Whatsapp</li>
                                            <li onClick={() => shareToPlatform('twitter')}><FaTwitter /> Share to Twitter</li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                        </div>
     </div>
     </div>
    );
}

export default Investment;
