import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaEarthAmericas } from "react-icons/fa6";
import CalendarModal from '@/components/modals/CustomCalendar/CalendarModal';
import styles from './date.module.css';
import { getSlots } from '@/services/bookCall';

function DateAndTime({ handleNext, setFormData, formData, formatDate }) {
    const [selectedtime, setSlot] = useState(formData.timeslot);
    const [openCalendar, setopenCalendar] = useState(false);
    const [slots, setSlots] = useState([])
    const calendarRef = useRef(null);
    const [selectedTimezone, setSelectedTimezone] = useState("");

    const handleChange = (event) => {
        setSelectedTimezone(event.target.value);
    };



    // function formatDate(inputDate) {
    //     const date = new Date(inputDate);

    //     const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    //     const day = String(date.getDate()).padStart(2, "0");
    //     const month = months[date.getMonth()];
    //     const year = date.getFullYear();

    //     return `${day}-${month}-${year}`;
    // }

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

    const getData = async () => {
        try {
            const date = formatDate(formData.date);
            const { res, err } = await getSlots(date);
            console.log("API Response:", res);

            if (res?.data && Array.isArray(res.data)) {
                setSlots(res.data);
            } else {
                setSlots([]);
            }
        } catch (error) {
            console.log("Error fetching slots:", error);
            setSlots([]);
        }
    };


    useEffect(() => {
        console.log("date changes")
        getData()
    }, [formData.date])

    return (
        <>
            <div className={styles.selectDate} ref={calendarRef}>
                <div className={styles.iconDateBox} onClick={() => setopenCalendar(!openCalendar)}>
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
                        <CalendarModal formData={formData} setopenCalendar={setopenCalendar} setFormData={setFormData} />
                    ) : null}
                </div>
            </div>
            <div className={styles.timezone}>
                <p>Select time</p>
               <div className={styles.timezoneDropdown}>
               <FaEarthAmericas/>
                <div className={styles.timezoneDropdown}>
                
                    <select
                        className={styles.dropdownSelect}
                        value={selectedTimezone}
                        onChange={handleChange}
                    > 
                      <option value="Asia/Kolkata">Asia/Kolkata</option>
                        
                    </select>
                </div>
               </div>
               
            </div>
            <div className={styles.slots}>
                {slots && slots?.length > 0 ? (
                    slots?.map((slot, index) => (
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
                    ))
                ) : (
                    <div className={styles.noSlotsMessage}>
                        <h3>Slots Not Available</h3>
                    </div>
                )}
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
