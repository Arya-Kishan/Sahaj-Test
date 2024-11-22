import React from 'react';
import support from '../../../assests/ProcessFlow/support.webp';
import Image from "next/image";
import styles from './support.module.css'

function Support() {
  return (
    <div>
      <div className={styles.container}>
            <div className={styles.textSection}>
                <p className={styles.textheading}>Ongoing Support</p>
                <ul className={styles.textdescription}>
                    <li>We'll stay in touch to monitor your progress and make adjustments as needed.</li>
                    <li> Benefit from our ongoing support and expertise.</li>
                </ul>
            </div>
            <div className={styles.imageSection}>
                <Image src={support} alt="Example" className={styles.image} />
            </div>
       </div>

    </div>
  )
}

export default Support
