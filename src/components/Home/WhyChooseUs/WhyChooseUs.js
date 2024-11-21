// WhyChooseUs.js
import React from 'react';
import styles from './WhyChooseUs.module.css';

const features = [
  {
    icon: '💰',
    title: 'Affordable Financial Planning',
    description: 'Flat INR 15,000/- for first year',
  },
  {
    icon: '👨‍💼',
    title: 'Industry experts',
    description: 'Enjoy the convenience of online financial planning, accessible 24/7.',
  },
  {
    icon: '📋',
    title: 'Comprehensive Financial Planning',
    description: 'Includes risk profiling, emergency funds, tax planning, and financial goals',
  },
  {
    icon: '💻',
    title: 'Completely online',
    description: 'Enjoy the convenience of online financial planning, accessible 24/7.',
  },
  {
    icon: '📄',
    title: 'SEBI Registered',
    description: 'Enjoy the convenience of online financial planning, accessible 24/7.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Why choose us?</h2>
      <div className={styles.features}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
