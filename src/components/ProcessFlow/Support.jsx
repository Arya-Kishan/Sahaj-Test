import React from 'react';
import support from '../../assests/ProcessFlow/support.webp';
import styles from './support.module.css'

function Support() {
  return (
    <div>
      <div class={styles.container}>
            <div class={styles.textSection}>
                <p class={styles.textheading}>Ongoing Support</p>
                <ul class={styles.textdescription}>
                    <li>We'll stay in touch to monitor your progress and make adjustments as needed.</li>
                    <li> Benefit from our ongoing support and expertise.</li>
                </ul>
            </div>
            <div class={styles.imageSection}>
                <img src={support} alt="Example" class={styles.image} />
            </div>
       </div>

    </div>
  )
}

export default Support
