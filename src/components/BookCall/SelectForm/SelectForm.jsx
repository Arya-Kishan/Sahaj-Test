import styles from "./style.module.css";

function SelectForm({ setConfirmPhase }) {


    const handleSubmit=()=>{
        setConfirmPhase(false)
    }
    return (
        <div className={styles.container}>
            
            <div className={styles.options}>
            <h3 className={styles.title}>Where did you hear about us?</h3>
                <div>
                    <input type="radio" name="option" value="Google Search" id="googleSearch" />
                    <label htmlFor="googleSearch">Google Search</label>
                </div>
                <div>
                    <input type="radio" name="option" value="Social Media" id="socialMedia" />
                    <label htmlFor="socialMedia">Social Media</label>
                </div>
                <div>
                    <input type="radio" name="option" value="Referral" id="referral" />
                    <label htmlFor="referral">Referral</label>
                </div>
                <div>
                    <input type="radio" name="option" value="Other" id="other" />
                    <label htmlFor="other">Other</label>
                </div>
            </div>
            <button className={styles.nextButton} onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}

export default SelectForm;
