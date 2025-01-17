import { useState } from "react";
import styles from "./Modal.module.css";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { countryCode } from "../BookCall/countrycode";
import { downloadData } from "@/services/download";
import checkLogo from "../../../public/logos/Featuredicon.png";

const DownloadModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
    });
    const [countryData, setCountryData] = useState("91");
    const [codeDropdown, setOpenClose] = useState(false);
    const [responseTrue, setResponse] = useState(false);
    const [phoneError, setPhoneError] = useState("");

    const isFormValid =
        formData.fullName && formData.email && formData.phone && !phoneError;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "phone") {
            if (!/^\d*$/.test(value)) {
                setPhoneError("Phone number can only contain numbers.");
                return;
            }
            if (value.length > 10) {
                setPhoneError("Phone number must be exactly 10 digits.");
                return;
            }
            setPhoneError(value.length < 10 ? "Phone number must be 10 digits." : "");
        }
        setFormData({ ...formData, [name]: value });
    };

    const handleCountryCodeChange = (code) => {
        setCountryData(code);
        setOpenClose(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedData = {
            full_name: formData.fullName,
            email: formData.email,
            country_code: `+${countryData}`,
            phone_number: formData.phone,
        };

        console.log("Formatted Data Submitted:", formattedData);

        try {
            const { res, err } = await downloadData(formattedData);
            if (res) {
                console.log(res);
                setResponse(true);
            }
        } catch (error) {
            console.log(error);
        }

        setFormData({
            fullName: "",
            email: "",
            phone: "",
        });
    };
    const hangleClose=()=>{
        onClose();
        setResponse(false);
    }

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={hangleClose}>
                    &times;
                </button>
                {responseTrue ? (
                    <div className={styles.successBox}>
                        <div className={styles.box1}>
                            <div className={styles.box2}>
                                <Image src={checkLogo} alt="success logo" />
                            </div>
                        </div>
                        <h3>Your free financial plan has been sent to your email address.</h3>
                    </div>
                ) : (
                    <>
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
                                <p>Phone <span className={styles.stars}>*</span></p>
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
                                        value={formData.phone}
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
                                                        onClick={() => handleCountryCodeChange(ele.code)}
                                                    >
                                                        + {ele.code} {ele.name}
                                                    </p>
                                                ))}
                                        </div>
                                    )}
                                </div>
                                {phoneError && <p className={styles.errorText}>{phoneError}</p>}
                            </label>
                            <button
                                type="submit"
                                className={`${styles.submitBTN} ${
                                    isFormValid ? styles.submitActive : styles.submitDisabled
                                }`}
                                disabled={!isFormValid}
                            >
                                Submit
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default DownloadModal;
