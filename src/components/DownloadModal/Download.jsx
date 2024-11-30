import { useState, useEffect } from "react";
import styles from "./Modal.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { countryCode } from "../BookCall/countrycode";

const DownloadModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
    });
    const [countryData, setCountryData] = useState("91");
    const [codeDropdown, setOpenClose] = useState(false);

    const isFormValid = formData.fullName && formData.email && formData.phone;

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "phone") {
            setFormData({ ...formData, [name]: `+${countryData}${value}` });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleCountryCodeChange = (code) => {
        setCountryData(code);

        setOpenClose(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        setFormData({
            fullName: "",
            email: "",
            phone: "",
        });
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h2 className={styles.formHeader}>
                    Fill out the form to get your free plan sent directly to your inbox.
                </h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label>
                        <p>
                            Full name<span className={styles.stars}>*</span>
                        </p>
                        <input
                            className={styles.input}
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Full name"
                            required
                        />
                    </label>
                    <label>
                        <p>
                            Email address<span className={styles.stars}>*</span>
                        </p>
                        <input
                            className={styles.input}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="yourmail@gmail.com"
                            required
                        />
                    </label>
                    <label>
                        Phone
                        <div className={styles.phoneInput}>
                            <div
                                onClick={() => setOpenClose(!codeDropdown)}
                                className={styles.countryCode}
                            >
                                <p>+ {countryData}</p>
                                <IoIosArrowDown />
                            </div>
                            <hr className={styles.verticleLine} />
                            <input
                                className={styles.Pinput}
                                type="tel"
                                name="phone"
                                value={formData.phone.replace(`+${countryData}`, "")}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number"
                                required
                            />
                            {codeDropdown && (
                                <div className={styles.dropBox}>
                                    {countryCode &&
                                        countryCode.map((ele) => (
                                            <p
                                                key={ele.code}
                                                onClick={() =>
                                                    handleCountryCodeChange(ele.code)
                                                }
                                            >
                                                + {ele.code} {ele.name}
                                            </p>
                                        ))}
                                </div>
                            )}
                        </div>
                    </label>
                    <button
                        type="submit"
                        className={`${styles.submitBTN} ${isFormValid ? styles.submitActive : styles.submitDisabled
                            }`}
                        disabled={!isFormValid}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DownloadModal;
