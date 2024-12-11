import styles from "./style.module.css";

function SelectForm({ setConfirmPhase, setFormData, formData }) {
    const handleOptionChange = (event) => {
        setFormData({
            ...formData,
            source: event.target.value, 
        });
    };

    const handleSubmit = () => {
        setConfirmPhase(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.options}>
                <h3 className={styles.title}>Where did you hear about us?</h3>
                <div>
                    <input
                        type="radio"
                        name="option"
                        value="Google Search"
                        id="googleSearch"
                        onChange={handleOptionChange}
                        checked={formData.source === "Google Search"} 
                    />
                    <label htmlFor="googleSearch">Google Search</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="option"
                        value="Social Media"
                        id="socialMedia"
                        onChange={handleOptionChange}
                        checked={formData.source === "Social Media"}
                    />
                    <label htmlFor="socialMedia">Social Media</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="option"
                        value="Referral"
                        id="referral"
                        onChange={handleOptionChange}
                        checked={formData.source === "Referral"}
                    />
                    <label htmlFor="referral">Referral</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="option"
                        value="Other"
                        id="other"
                        onChange={handleOptionChange}
                        checked={formData.source === "Other"}
                    />
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
