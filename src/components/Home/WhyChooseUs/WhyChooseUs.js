
import styles from './WhyChooseUs.module.css';
import { useState, useEffect } from 'react';
import { getWhyChooseUsData } from '@/services/home';



const WhyChooseUs = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const { res, err } = await getWhyChooseUsData();
      if (res?.data) {
        // console.log(res?.data.data);
        setData(res?.data?.data)
      }
      else{
        setData([])
      }

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(()=>{
    getData()
  },[])




  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Why choose us?</h2>
      <div className={styles.features}>
        {data &&
        data?.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <img src={feature?.Logo} className={styles.icon}/>
            <h3 className={styles.title}>{feature?.Title}</h3>
            <p className={styles.description}>{feature.Description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
