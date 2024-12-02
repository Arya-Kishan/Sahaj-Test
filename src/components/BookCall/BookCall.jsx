import { useState, useEffect } from "react";
import styles from "./Modal.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaEarthAmericas } from "react-icons/fa6";

const BookCallModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
    });
    const slots = [
        '09:00 AM',
        '10:00 AM',
        '11:00 AM',
        '12:00 PM',
        '03:00 PM',
        '04:00 PM',
        '05:00 PM',
        '06:00 PM',
        '07:00 PM',
    ];
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
                <div className={styles.buttonBox}>
                    <FaArrowLeft className={styles.backArrow} />
                    <button className={styles.closeButton} onClick={onClose}>
                        &times;
                    </button>
                </div>
                <section className={styles.section} >
                    <div className={styles.leftBox}>
                        <div className={styles.leftBoxHeader}>
                            <h3>Book Your Appointment</h3>
                            <p>Schedule a 30-minute consultation with our experts.</p>
                        </div>

                        <div className={styles.progressBox}>
                            <div className="">
                                <h3>1</h3>
                                <p>Select date and time</p>
                            </div>
                            <div className={styles.progressLine} ></div>
                            <div className="">
                                <h3>2</h3>
                                <p>Confirm  your slot</p>
                            </div>
                        </div>
                    </div>
                    <hr className={styles.verticleLine} />
                    <div className={styles.rightBox}>
                            <div className={styles.selectDate}>
                            <h3>selectedDate</h3>
                            <IoIosArrowDown />
                            </div>
                            <div className={styles.timezone}>
                                <p>Select time</p>
                                <div className={styles.timezoneDropdown}>
                                <FaEarthAmericas />
                                    <p>Asia/Kolkata</p>
                                    <IoIosArrowDown />
                                </div>
                            </div>
                            <div className={styles.slots}>
                                {slots.map((slot, index) => (
                                    <button key={index} className={styles.slot}>
                                        {slot}
                                    </button>
                                ))}
                            </div>
                        </div>
                    
                </section>


            </div>
        </div>
    );
};

export default BookCallModal;
