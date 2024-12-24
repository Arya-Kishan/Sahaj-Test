import Image from "next/image";
import styles from './heading.module.css';
import logo from '../../../assests/AboutUs/logo.webp';

const Heading=({allData})=>{
    return(
        <div>
            <div className={styles.InfoContanier}>
                    <div className={styles.infoHeading}>
                        <p className={styles.infoHeadingtext}>
                            {allData?.PitchLine}
                        </p>
                        <div className={styles.infoHeadingLogo}>
                           <Image  src={logo} className={styles.infoHeadingLogoImg} alt="CompanyLogo"/>
                        </div>
                      
                    </div>
                
            </div>
        </div>
    )
}
export default Heading;