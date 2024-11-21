"use client"
import style from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from '../dropDown/Dropdown';
import logo from '../../assests/Logo/sahajlogo.webp'

function Navbar() {
  return (
    <>
      <nav className={style.nav}>
        {/* Logo Section */}
        <div className={style.logoBox}>
          <Image className={style.logos} src={logo} alt="Sahaj Logo" />
        </div>
        
        {/* Dropdown Menus */}
        <div className={style.dropBox}>
          <Dropdown
            title="Services"
            options={[
              { label: 'Individual Services', path: '/individualservices' },
              { label: 'Service 2', path: '/individualservices' },
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
              { label: 'Blogs', path: '/blog' },
              { label: 'Videos', path: '/videos' },
            ]}
          />
          
          {/* About Us Link */}
          <Link href="/about" className={style.aboutus}>
            About Us
          </Link>
        </div>

        {/* Call-to-Action Button */}
        <button className={style.callButton}>Book a call</button>
      </nav>
    </>
  );
}

export default Navbar;
