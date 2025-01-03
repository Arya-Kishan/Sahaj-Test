'use client';
import { useSelector, useDispatch } from 'react-redux';
import { toggleBookCallModal } from '@/store/slices/modalSlice';
import { useState } from 'react';
import style from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from '../dropDown/Dropdown';
import logo from '../../assests/Logo/sahajlogo.webp';
import BookCallModal from '../BookCall/BookCall';

function Navbar() {
  const dispatch = useDispatch();
  const isBookCallModalOpen = useSelector((state) => state.modal.isBookCallModalOpen);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    console.log('Book a call clicked');
    dispatch(toggleBookCallModal());
  };

  return (
    <div className={style.mainContainer}>
      <nav className={style.nav}>
        <div className={style.logoBox}>
          <Link href="/">
            <Image className={style.logos} src={logo} alt="Sahaj Logo" />
          </Link>
        </div>

        <div className={`${style.dropBox} ${isMenuOpen ? style.hideDesktop : ''}`}>
          <Dropdown
            title="Services"
            options={[
              { label: 'Financial planning', path: '/services' },
              { label: 'Renewal Service', path: '/renewalplan' },
            ]}
          />
          <Dropdown
            title="How it works"
            options={[
              { label: 'Our Process', path: '/processflow' },
              { label: 'FAQs', path: '/faqs' },
            ]}
          />
          <Dropdown
            title="Media"
            options={[
              { label: 'Press coverage', path: '/media/pressCoverage' },
              { label: 'Podcast', path: '/media/podcast' },
              { label: 'Video channels', path: '/media/videoChannel' },
              { label: 'Blogs', path: '/media/blogs' },
              { label: 'SM’s Customers in Media', path: '/media/customersInMedia' },
            ]}
          />
          <Link href="/about" className={style.aboutus}>
            About Us
          </Link>
        </div>

        <button className={style.callButton} onClick={openModal}>
          <span>Book a call</span>
        </button>

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
              { label: 'Renewal Service', path: '/renewalplan' },
            ]}
          />
          <Dropdown
            title="How it works"
            options={[
              { label: 'Our Process', path: '/processflow' },
              { label: 'FAQs', path: '/faqs' },
            ]}
          />
          <Dropdown
            title="Media"
            options={[
              { label: 'Press coverage', path: '/media/press-coverage' },
              { label: 'Podcast', path: '/media/podcast' },
              { label: 'Video channels', path: '/media/video' },
              { label: 'Blogs', path: '/media/blogs' },
              { label: 'SM’s Customers in Media', path: '/media/customers' },
            ]}
          />
          <Link href="/about" className={style.mobileAboutus}>
            About Us
          </Link>
          <button className={style.mobileCallButton} onClick={openModal}>
            Book a free call
          </button>
        </div>
      )}
      <BookCallModal isOpen={isBookCallModalOpen} onClose={() => dispatch(toggleBookCallModal())} />
    </div>  
  );
}

export default Navbar;
