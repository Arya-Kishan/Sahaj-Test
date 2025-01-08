'use client';
import { useSelector, useDispatch } from 'react-redux';
import { toggleBookCallModal } from '@/store/slices/modalSlice';
import { useEffect, useState } from 'react';
import style from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from '../dropDown/Dropdown';
import logo from '../../assests/Logo/sahajlogo.webp';
import BookCallModal from '../BookCall/BookCall';

function Navbar() {
  const dispatch = useDispatch();
  const [hasShadow, setHasShadow] = useState(false);
  const isBookCallModalOpen = useSelector((state) => state.modal.isBookCallModalOpen);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    console.log('Book a call clicked');
    dispatch(toggleBookCallModal());

  };

  useEffect(() => {
    if (isMenuOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className={style.mainContainer}>
      <nav className={style.nav} style={{
        boxShadow: hasShadow
          ? "0 4px 6px rgba(0, 0, 0, 0.1)"
          : "none",
      }}
      >
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
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
          <Dropdown
            title="How it works"
            options={[
              { label: 'Our Process', path: '/processflow' },
              { label: 'FAQs', path: '/faqs' },
            ]}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
          <Dropdown
            title="Media"
            options={[
              { label: 'Client Story', path: '/media/customersInMedia' },
              { label: 'Video', path: '/media/videoChannel' },
              { label: 'Podcast', path: '/media/podcast' },
              { label: 'Press', path: '/media/pressCoverage' },
              { label: 'Blog', path: '/media/blogs' },
            ]}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
          <Link href="/about" className={style.aboutus} onClick={() => { setActiveLink("About Us") }} style={activeLink == "About Us" ? { fontWeight: "bold" } : { fontWeight: "300" }}>
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
          {/* <div className={style.mobilelogo}>
            <Image className={style.mobilelogos} src={logo} alt="Sahaj Logo" />
            <p onClick={toggleMenu}>✕</p>
          </div> */}
          <Link href="/" className={style.mobileAboutus} onClick={toggleMenu}>
            Home
          </Link>
          <Dropdown
            title="Services"
            options={[
              { label: 'Financial planning', path: '/services' },
              { label: 'Renewal Service', path: '/renewalplan' },
            ]}
            closeMenu={toggleMenu}
          />
          <Dropdown
            title="How it works"
            options={[
              { label: 'Our Process', path: '/processflow' },
              { label: 'FAQs', path: '/faqs' },
            ]}
            closeMenu={toggleMenu}
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
            closeMenu={toggleMenu}
          />
          <Link href="/about" className={style.mobileAboutus} onClick={toggleMenu}>
            About Us
          </Link>
          <button className={style.mobileCallButton} onClick={() => {
            openModal();
            toggleMenu();
          }}>
            Book a free call
          </button>
        </div>
      )}
      <BookCallModal isOpen={isBookCallModalOpen} onClose={() => dispatch(toggleBookCallModal())} />
    </div>
  );
}

export default Navbar;
