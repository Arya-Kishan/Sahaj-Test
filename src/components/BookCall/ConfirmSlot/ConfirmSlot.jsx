
import styles from './confirm.module.css';
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import PrimaryButton from '@/components/Buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '@/components/Buttons/SecondaryButton/SecondaryButton';
import { IoLogoWhatsapp } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { GoClock, GoGlobe } from "react-icons/go";

function ConfirmSlot({ ResetData, formData }) {

    const [isConfirmed, setConfirm] = useState(false);

    const formatDateTime = (date, time) => {

        const [hour, minute, period] = time.match(/(\d{2}):(\d{2})\s(AM|PM)/).slice(1);
        const adjustedHour = period === 'PM' && hour !== '12' ? parseInt(hour, 10) + 12 : hour === '12' ? '00' : hour;
        const fullDateTime = new Date(`${date}T${adjustedHour}:${minute}:00`);

        const formattedDate = fullDateTime.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
        return `${time} ${formattedDate}`;
    };

    const formattedDateTime = formatDateTime(formData.date, formData.timeslot);

    const confirmBooking = () => {
        setConfirm(true)

    }

    return (
        <>
            {isConfirmed ? <>

                <div className={styles.headerBox}>
                    <RxCross1 onClick={ResetData} className={styles.CrossIcon} />
                </div>

                <section className={styles.datailsSection}>
                    <div className={styles.iconOuterBorder}>
                        <div className={styles.iconInnerBorder}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                                <path d="M2.31976 18.6072C1.51225 17.6676 1.5118 16.2811 2.31903 15.3414C2.89687 14.6687 3.4757 14.0078 4.057 13.3574C3.88125 12.5144 3.71244 11.6633 3.55004 10.8021C3.32046 9.58472 4.01334 8.38374 5.1823 7.97349C6.01904 7.67985 6.85073 7.39697 7.67934 7.12436C7.94864 6.30637 8.228 5.4849 8.51797 4.65785C8.92787 3.48876 10.1284 2.79514 11.3458 3.02432C12.2026 3.18561 13.0498 3.35347 13.8895 3.52842C14.5293 2.95705 15.1791 2.38805 15.8404 1.82001C16.7802 1.01278 18.1667 1.01322 19.1062 1.82073C19.7708 2.39199 20.4235 2.96373 21.0657 3.53748C21.9197 3.35927 22.7813 3.1884 23.6528 3.02432C24.8703 2.79514 26.0707 3.48876 26.4807 4.65785C26.7707 5.4849 27.0499 6.30637 27.3193 7.12436C28.1479 7.39697 28.9797 7.67985 29.8163 7.97349C30.9854 8.38374 31.6783 9.5847 31.4486 10.8021C31.2834 11.6781 31.1117 12.5436 30.9327 13.4008C31.5166 14.0539 32.0982 14.7177 32.6794 15.394C33.4869 16.3335 33.4874 17.72 32.6801 18.6598C32.1021 19.3325 31.5234 19.9935 30.942 20.644C31.1178 21.487 31.2866 22.338 31.4488 23.1992C31.6786 24.4167 30.9857 25.6176 29.8166 26.0278C28.9797 26.3217 28.1479 26.6046 27.319 26.8771C27.0497 27.695 26.7704 28.5166 26.4804 29.3435C26.0705 30.5126 24.8701 31.2062 23.6526 30.977C22.796 30.8157 21.9489 30.6479 21.1093 30.4731C20.4697 31.0443 19.82 31.6133 19.1588 32.1811C18.219 32.9883 16.8325 32.9878 15.893 32.1803C15.2284 31.6091 14.5758 31.0375 13.9336 30.4638C13.0795 30.6421 12.2177 30.8128 11.3461 30.977C10.1286 31.2062 8.92808 30.5126 8.51819 29.3435C8.22822 28.5166 7.94888 27.695 7.67961 26.8771C6.85083 26.6043 6.019 26.3217 5.18209 26.0278C4.01312 25.6176 3.32025 24.4167 3.54982 23.1992C3.71506 22.323 3.88693 21.4572 4.06601 20.5997C3.48235 19.9469 2.9008 19.2832 2.31976 18.6072Z" fill="url(#paint0_linear_922_46674)" stroke="url(#paint1_linear_922_46674)" stroke-width="1.41667" stroke-linejoin="round" />
                                <path d="M12.1816 18.3304L16.05 22.3197C17.8703 17.0907 19.3863 14.7962 22.8197 11.6816" stroke="white" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_922_46674" x1="25.374" y1="7.69363" x2="10.3401" y2="28.4551" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F8DB75" />
                                        <stop offset="1" stop-color="#A4730F" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_922_46674" x1="25.374" y1="7.69363" x2="10.3401" y2="28.4551" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F8DB75" />
                                        <stop offset="1" stop-color="#A4730F" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className={styles.subHeader}>
                        <h3>Appointment confirmed!</h3>
                        <p>Your appointment with Sahaj Money has been confirmed.</p>
                    </div>
                    <div className={styles.slotDetailsBox}>
                        <div className={styles.sltoData}>
                            <div>
                            <p><CiCalendar className={styles.slotIcon}/>September 27,  2024</p>
                            <p><GoClock className={styles.slotIcon} />11 am</p>
                            <p><GoGlobe className={styles.slotIcon}/>Asia/Kolkata</p>
                            </div>
                        </div>
                        <h3>Please check your email for a calendar invitation.</h3>
                    </div>

                </section>

            </> :
                <>
                    <div className={styles.headerBox}>
                        <h3>
                            <span></span>Don&apos;t leave just yet! Let us assist you.
                            <span>
                                <RxCross1 onClick={ResetData} className={styles.cancelbtn} />
                            </span>
                        </h3>
                        <p>Need some support? We&apos;re just a click away.</p>
                    </div>
                    <div className={styles.progressBox}>
                        <div className={styles.stepBox}>
                            <h3 className={styles.step1}>1</h3>
                            <p>{formattedDateTime}</p>
                        </div>
                        <div className={styles.progressLine}></div>
                        <div className={styles.stepBox}>
                            <h3 >2</h3>
                            <p>Confirm your slot</p>
                        </div>
                    </div>
                    <div className={styles.buttonBox}>
                        <SecondaryButton onClick={ResetData}>Exit</SecondaryButton>
                        <PrimaryButton onClick={confirmBooking}>Confirm</PrimaryButton>
                    </div>
                    <div className={styles.whatsAppBox}>
                        <IoLogoWhatsapp className={styles.whatsAppLogo} />
                        <div className={styles.whatsAppText}>
                            <h3>Need more assistance? Reach out to us on WhatsApp.</h3>
                            <p>WhatsApp us now</p>
                        </div>
                    </div>
                </>}
        </>
    );
}

export default ConfirmSlot;
