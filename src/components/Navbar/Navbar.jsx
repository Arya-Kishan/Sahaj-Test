'use client';
import { useState } from 'react';
import style from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from '../dropDown/Dropdown';
import logo from '../../assests/Logo/sahajlogo.webp';
import BookCallModal from '../BookCall/BookCall';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const openModal =()=>{
    console.log("clicked")
    setIsModalOpen(!isMenuOpen);

  }

  return (
    <div className={style.mainContainer}>
      <nav className={style.nav}>
        <div className={style.logoBox}>
          <Link href="/">
            <Image  className={style.logos} src={logo} alt="Sahaj Logo" />
          </Link>
        </div>

        <div className={`${style.dropBox} ${isMenuOpen ? style.hideDesktop : ''}`}>
          <Dropdown
            title="Services"
            options={[
              { label: 'Financial planning', path: '/services' },
              { label: 'Renewal Service', path: '/services' },
            ]}
          />
          <Dropdown
            title="How it works"
            options={[
              { label: 'ProcessFlow', path: '/processflow' },
              { label: 'FAQs', path: '/faqs' },
            ]}
          />
          <Dropdown
            title="Media"
            options={[
              { label: 'Podcast', path: '/media/podcast' },
              { label: 'Press coverage', path: '/media/press-coverage' },
              { label: 'Video channels', path: '/media/video' },
              { label: 'Blogs', path: '/media/blogs' },
              { label: 'SM’s Customers in Media', path: '/media/customers' },
            ]}
          />
          <Link href="/about" className={style.aboutus}>
            About Us
          </Link>
        </div>

        <button className={style.callButton} onClick={openModal}>Book a call</button>

        <button className={style.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {isMenuOpen && (
        <div className={style.mobileMenu}>
          <div className={style.mobilelogo}>
          <Image className={style.mobilelogos} src={logo} alt="Sahaj Logo" />
          <p onClick={toggleMenu}>✕</p>
          </div>
          <Link href="/" className={style.mobileAboutus}>
            Home
          </Link>
          <Dropdown
            title="Services"
            options={[
              { label: 'Financial planning', path: '/services' },
              { label: 'Renewal Service', path: '/services' },
            ]}
          />
          <Dropdown
            title="How it works"
            options={[
              { label: 'ProcessFlow', path: '/processflow' },
              { label: 'FAQs', path: '/faqs' },
            ]}
          />
          <Dropdown
            title="Media"
            options={[
              { label: 'Podcast', path: '/media/podcast' },
              { label: 'Press coverage', path: '/media/press-coverage' },
              { label: 'Video channels', path: '/media/video' },
              { label: 'Blogs', path: '/media/blogs' },
              { label: 'SM’s Customers in Media', path: '/media/customers' },
            ]}
          />
          <Link href="/about" className={style.mobileAboutus}>
            About Us
          </Link>
          <button className={style.mobileCallButton}  onClick={openModal}>Book a free call</button>
        </div>
      )}
      <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>

  );
}

export default Navbar;
