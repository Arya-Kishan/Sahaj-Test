import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaEarthAmericas } from "react-icons/fa6";
import CalendarModal from '@/components/modals/CustomCalendar/CalendarModal';
import styles from './date.module.css';

function DateAndTime({ handleNext, setFormData, formData }) {
    const [selectedtime, setSlot] = useState(formData.timeslot);
    const [openCalendar, setopenCalendar] = useState(false);
    const calendarRef = useRef(null);

    const slots = [
        '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
        '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM',
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setopenCalendar(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className={styles.selectDate} ref={calendarRef}>
                <div className={styles.iconDateBox}  onClick={() => setopenCalendar(!openCalendar)}>
                    {formData?.date ? (
                        <div className={styles.date}>
                            {formData.date.toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </div>
                    ) : (
                        <div className={styles.placeholder}>Select Date</div>
                    )}
                    <IoIosArrowDown />
                </div>
                <div className={styles.calendarBox}>
                    {openCalendar ? (
                        <CalendarModal formData={formData} setFormData={setFormData} />
                    ) : null}
                </div>
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
                    <button
                        key={index}
                        className={`${styles.slot} ${selectedtime === slot ? styles.seletedSlot : ""}`}
                        onClick={() => {
                            setSlot(slot);
                            setFormData({ ...formData, timeslot: slot });
                        }}
                    >
                        {slot}
                    </button>
                ))}
            </div>
            <button
                disabled={!formData.date || !formData.timeslot}
                className={styles.nextbutton}
                onClick={handleNext}
            >
                Next
            </button>
        </>
    );
}

export default DateAndTime;
