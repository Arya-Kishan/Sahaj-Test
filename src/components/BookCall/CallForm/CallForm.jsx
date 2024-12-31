import { useState } from "react";
import styles from "./Modal.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { countryCode } from "../countrycode";

const CallForm = ({ handleNext, setFormData, formData }) => {
    const [formValues, setFormValues] = useState({
        fullName: formData?.Name || "",
        email: formData?.email || "",
        phone: formData?.phoneNumber || "",
    });
    const [countryData, setCountryData] = useState("91");
    const [codeDropdown, setOpenClose] = useState(false);
    const [phoneError, setPhoneError] = useState("");

    const isFormValid =
        formValues.fullName &&
        formValues.email &&
        formValues.phone &&
        !phoneError;

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "phone") {
            const phoneValue = value.replace(/\D/g, "");
            if (phoneValue.length <= 10) {
                setPhoneError("");
                setFormValues({ ...formValues, [name]: `+${countryData}${phoneValue}` });
            } else {
                setPhoneError("Phone number must be 10 digits.");
            }
        } else {
            setFormValues({ ...formValues, [name]: value });
        }
    };

    const handleCountryCodeChange = (code) => {
        setCountryData(code);
        setOpenClose(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            Name: formValues.fullName,
            email: formValues.email,
            phoneNumber: formValues.phone,
        });
        handleNext();
        console.log("Form Data Submitted:", formValues);
        setFormValues({
            fullName: "",
            email: "",
            phone: "",
        });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label>
                <p>
                    Full name<span className={styles.stars}>*</span>
                </p>
                <input
                    className={styles.input}
                    type="text"
                    name="fullName"
                    value={formValues.fullName}
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
                    value={formValues.email}
                    onChange={handleInputChange}
                    placeholder="yourmail@gmail.com"
                    required
                />
            </label>
            <label>
               <p> Phone<span className={styles.stars}>*</span></p>
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
                        value={formValues.phone.replace(`+${countryData}`, "")}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        required
                    />
                    {phoneError && <p className={styles.error}>{phoneError}</p>}
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
            </label>
            <button
                type="submit"
                className={`${styles.submitBTN} ${isFormValid ? styles.submitActive : styles.submitDisabled}`}
                disabled={!isFormValid}
            >
                Next
            </button>
        </form>
    );
};

export default CallForm;
