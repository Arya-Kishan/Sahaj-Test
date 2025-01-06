"use client"

import React, { useState } from 'react';
import styles from "./Investment.module.css";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { BsLink, BsMessenger } from 'react-icons/bs';
import EllipseIcon from '../../assests/Blog/EllipseIcon.webp';
import lindinimg from '../../assests/Blog/linkdinimg.webp';
import instagramIcon from '../../assests/Blog/instagramIcon.webp';
import { FaShareAlt } from 'react-icons/fa';

const Investment = ({ content }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    function transformYouTubeLink(link) {
        console.log("raw link", link)
        if (link.includes("watch?v=")) {
          console.log("link",link.replace("watch?v=", "embed/"))
          return link.replace("watch?v=", "embed/");
        }
        return link;
      }

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
        <div className={styles.mainContainer}>
            {content?.map((section, sectionIndex) => (
                <div key={section._id} className={styles.section}>
                   <div className={styles.contentBox}>
                   <h2 className={styles.title}>{section.title}</h2>
                    {section.ContentParagraph?.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex} className={styles.paragraph}>{paragraph}</p>
                    ))}
                   </div>
                    {section.Image && (
                        <div className={styles.imageContainer}>
                            <img src={section.Image} alt={section.title} className={styles.image} />
                        </div>
                    )}
                    {section.Video && (
                        <div className={styles.videoContainer}>
                            <iframe
                                width="100%"
                                height="315"
                                src={transformYouTubeLink(section.Video)}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
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
};

export default Investment;
