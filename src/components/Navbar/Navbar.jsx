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
    <>
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
              { label: 'Services', path: '/services' },
              { label: 'Individual Services', path: '/individualservices' },
              { label: 'Service 3', path: '/individualservices' },
            ]}
          />
          <Dropdown
            title="How it works"
            options={[
              { label: 'ProcessFlow', path: '/processflow' },
              { label: 'Step 2', path: '/processflow' },
            ]}
          />
          <Dropdown
            title="Media"
            options={[
              { label: 'Blogs', path: '/blog/1' },
              { label: 'Videos', path: '/videos' },
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
              { label: 'Services', path: '/services' },
              { label: 'Individual Services', path: '/individualservices' },
              { label: 'Service 3', path: '/individualservices' },
            ]}
          />
          <Dropdown
            title="How it works"
            options={[
              { label: 'ProcessFlow', path: '/processflow' },
              { label: 'Step 2', path: '/processflow' },
            ]}
          />
          <Dropdown
            title="Media"
            options={[
              { label: 'Blogs', path: '/blog/1' },
              { label: 'Videos', path: '/videos' },
            ]}
          />
          <Link href="/about" className={style.mobileAboutus}>
            About Us
          </Link>
          <button className={style.mobileCallButton}  onClick={openModal}>Book a free call</button>
        </div>
      )}
      <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>

  );
}

export default Navbar;
