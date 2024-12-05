import styles from './date.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { FaEarthAmericas } from "react-icons/fa6";
import { useState } from 'react';

function DateAndTime({ handleNext, setFormData, formData }) {
    const [selectedtime, setSlot] = useState(formData.timeslot)
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
    
    return (
        <>
            <div className={styles.selectDate}>
                <input type="date" value={formData.date} onChange={(e)=>setFormData({...formData, date:e.target.value})} name="date" id="" />
                {/* <IoIosArrowDown /> */}
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
                    <button key={index}
                        className={`${styles.slot} ${selectedtime === slot ? styles.seletedSlot : ""}`}
                        onClick={() => {
                            setSlot(slot)
                            setFormData({...formData, timeslot:slot})}}>
                        {slot}
                    </button>
                ))}
            </div>
            <button  disabled={formData.date === "" || formData.timeslot === ""}  className={styles.nextbutton} onClick={handleNext}>Next</button>
        </>
    )
}

export default DateAndTime