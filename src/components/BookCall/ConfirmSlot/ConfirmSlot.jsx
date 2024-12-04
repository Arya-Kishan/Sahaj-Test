import styles from './confirm.module.css';
import { RxCross1 } from "react-icons/rx";
import PrimaryButton from '@/components/Buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '@/components/Buttons/SecondaryButton/SecondaryButton';
import { IoLogoWhatsapp } from "react-icons/io";

function ConfirmSlot({ onClose }) {
    return (
        <>
            <div className={styles.headerBox}>
                <h3><span></span>Don&apos;t leave just yet! Let us assist you.
                    <span><RxCross1 onClick={onClose} className={styles.cancelbtn} /></span>
                </h3>
                <p>Need some support? We&apos;re just a click away.</p>
            </div>
            <div className={styles.progressBox}>
                <div>
                    <h3>1</h3>
                    <p>Select date and time</p>
                </div>
                <div className={styles.progressLine}></div>
                <div>
                    <h3>2</h3>
                    <p>Confirm your slot</p>
                </div>
            </div>
            <div className={styles.buttonBox}>
                <SecondaryButton>Exit</SecondaryButton>
                <PrimaryButton>Confirm</PrimaryButton>
            </div>
            <div className={styles.whatsAppBox}>
                <IoLogoWhatsapp className={styles.whatsAppLogo} />
                <div className={styles.whatsAppText}>
                    <h3>Need more assistance? Reach out to us on WhatsApp.</h3>
                    <p>WhatsApp us now</p>
                </div>
            </div>
        </>
    );
}

export default ConfirmSlot;
