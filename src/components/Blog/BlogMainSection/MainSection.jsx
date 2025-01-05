"use client"
import Image from "next/image";
import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { BsLink, BsMessenger } from 'react-icons/bs';
import EllipseIcon from '../../../assests/Blog/EllipseIcon.webp';
import lindinimg from '../../../assests/Blog/linkdinimg.webp';
import instagramIcon from '../../../assests/Blog/instagramIcon.webp';
import { FaShareAlt } from 'react-icons/fa';
import styles from './mainSection.module.css';
import { format } from 'date-fns';


const MainSection = ({ data }) => {
    const date = data?.createdAt ? new Date(data?.createdAt) : null;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const formateddate = format(date, "yyyy-MM-dd")

    const Item = ({ content }) => {
        return (
            <div
                dangerouslySetInnerHTML={{ __html: content }}
            />
        );
    };
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
        <div className={styles.mainSectionContainer}>
            <div className={styles.maininfoContainer}>
                <div className={styles.dateContainer}>
                    {formateddate}
                </div>
                <div className={styles.blogHeadingContainer}>
                    <div className={styles.MainHeading}>
                        {data?.title}
                    </div>
                    <div className={styles.subHeading}>
                        {data?.BlogPitchLine}
                    </div>
                    <div className={styles.tagsHolder}>
                        {data?.Tags?.length > 0 && data.Tags.map((tag, index) => (
                            <button className={styles.textButton} key={index}>{tag}</button>

                        ))}
                    </div>
                </div>   </div>
            <div className={styles.imgBox}>
                {data?.BlogImage ? (
                    <Image
                        src={data?.BlogImage}
                        alt="MainBlogImage"
                        className={styles.mainImg}
                        width={800}
                        height={400}
                    />
                ) : (
                    <div>No Image Available</div>
                )}
            </div>
            <div className={styles.descriptionContainer}>

                <div className={styles.detailsCards}>
                    <div className={styles.descriptionContent}>
                        <Item content={data?.Content} />
                    </div>


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
            </div>


        </div>
    )
}
export default MainSection;