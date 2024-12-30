"use client"

import React, { useState } from 'react';
import styles from "./finance.module.css";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { BsLink, BsMessenger } from 'react-icons/bs';
import EllipseIcon from '../../assests/Blog/EllipseIcon.webp';
import lindinimg from '../../assests/Blog/linkdinimg.webp';
import instagramIcon from '../../assests/Blog/instagramIcon.webp';
import { FaShareAlt } from 'react-icons/fa';

const FinancialFuture = ({ content }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
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
                                        <div className={`${styles.founderInfo} ${idx % 2 !== 0 ? styles.rowreverse : ''}`}>
                                           
                                            <div className={styles.founderDetails}>
                                                <p className={styles.founderDetailsHeading}>{ele?.title}</p>
                                                <div className={styles.founderDetailsContentContainer}>
                                                    <p>{ele?.Content || ele?.ContentParagraph}</p>
                                                    {ele?.Points ? <>
                                                        <ul className={styles.ulPoints}>
                                                            {ele?.Points.map((list, i) => <li key={i}>{list}</li>)}
                                                        </ul>
                                                    </> : ''}
                                                </div>

                                            </div>
                                           {ele?.Image && <div className={styles.founderImageBox}>
                                                <img src={ele?.Image} alt="image" srcSet="" />
                                            </div>} 
                                        
                                            {/* {ele?.ImageList?.length > 0 && (
                                                <div className={styles.featurIn}>
                                                   
                                                    <div className={styles.imageBox}>
                                                        {ele.ImageList.map((imgs, imgIndex) => (
                                                            <div key={imgIndex} className={styles.imgIndex}>
                                                                <Image src={imgs.FileLink} alt={`Featured image ${imgIndex + 1}`} width={250} height={40} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )} */}


                                        </div>
                                        {ele?.ImageList?.length > 0 && (
                                                <div className={styles.featurIn}>
                                                    {/* <h3>Feature in</h3> */}
                                                    <div className={styles.imageBox}>
                                                        {ele.ImageList.map((imgs, imgIndex) => (
                                                            <div key={imgIndex} className={styles.imgIndex}>
                                                                <Image src={imgs.FileLink} alt={`Featured image ${imgIndex + 1}`} width={250} height={40} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                       

                                    </React.Fragment>

                                })}

                            </> : ""}
                        </div>))
                }

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
        </>
    )
}

export default FinancialFuture