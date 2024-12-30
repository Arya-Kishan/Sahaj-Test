import { useState, useEffect } from "react";
import styles from "./Modal.module.css";
import { FaArrowLeft } from "react-icons/fa";
import DateAndTime from "./DateAndTime/DateAndTime";
import CallForm from "./CallForm/CallForm";
import SelectForm from "./SelectForm/SelectForm";
import ConfirmSlot from "./ConfirmSlot/ConfirmSlot";

const BookCallModal = ({ isOpen, onClose }) => {
    const [currentPhase, setCurrentPhase] = useState(1);
    const [confirmPhase, setConfirmPhase] = useState(true)
    const [formData, setFormData] = useState({
        Name: "",
        email: "",
        phoneNumber: "",
        date: "",
        timeslot: "",
        source: ""
    });
    const ResetData = () => {
        setCurrentPhase(1);
        setConfirmPhase(true)
        setFormData({
            Name: "",
            email: "",
            phoneNumber: "",
            date: "",
            timeslot: "",
            source: ""
        })
        onClose()
    }
    function formatDate(inputDate) {
        const date = new Date(inputDate);

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const day = String(date.getDate()).padStart(2, "0");
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])
    const renderPhase = () => {
        switch (currentPhase) {
            case 1:
                return <DateAndTime handleNext={handleNext} setFormData={setFormData} formData={formData} formatDate={formatDate} />;
            case 2:
                return <CallForm handleNext={handleNext} setFormData={setFormData} formData={formData} />;
            case 3:
                return <SelectForm handleNext={handleNext} setConfirmPhase={setConfirmPhase} setFormData={setFormData} formData={formData} />;
            default:
                return <h1>Error</h1>;
        }
    };

    const handleNext = () => {
        if (currentPhase < 3) setCurrentPhase(currentPhase + 1);
    };

    const handlePrevious = () => {
        if (currentPhase > 1) setCurrentPhase(currentPhase - 1);
    };






    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                {confirmPhase ? <>
                    {/* <CalendarModal/> */}
                    <div className={styles.buttonBox}>
                        <FaArrowLeft onClick={handlePrevious} className={styles.backArrow} />
                        <button className={styles.closeButton} onClick={ResetData}>
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
                                <div className={styles.progressTab}>
                                    <h3>1</h3>
                                    {formData?.date ? (
                                        <div className={styles.date}>
                                            <p>{formData.timeslot}{" "}
                                                <span>
                                                    {formData?.date
                                                        ? formData.date.toLocaleDateString('en-US', {

                                                            month: 'long',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })
                                                        : 'Select Date'}</span></p>
                                        </div>
                                    ) : (
                                        <div className={styles.placeholder}>Select Date</div>
                                    )}
                                </div>
                                <div className={styles.progressLine} ></div>
                                <div className={styles.progressTab}>
                                    <h3>2</h3>
                                    <p>Confirm  your slot</p>
                                </div>
                            </div>
                        </div>
                        <hr className={styles.verticleLine} />
                        <div className={styles.rightBox}>
                            {renderPhase()}

                        </div>

                    </section>



                </> : <>
                    <ConfirmSlot ResetData={ResetData} formData={formData} formatDate={formatDate} />
                </>}
            </div>
        </div>
    );
};

export default BookCallModal;
