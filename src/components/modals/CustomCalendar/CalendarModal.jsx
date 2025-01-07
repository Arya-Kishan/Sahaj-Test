import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { generateDate, months } from "./customCanlendar";
import cn from "./cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import style from "./calendar.module.css";

function CalendarModal({ setFormData, formData, setopenCalendar }) {
  const days = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  const isDateSelectable = (date) => {
    const difference = date.diff(currentDate, "day");
    return difference >= 0 && difference <= 4; 
  };

  // useEffect(() => {
  //   const formattedDate = `${selectDate.format("DD-MM-YYYY")}`;
  //   setFormData({ ...formData, date: selectDate.toDate() });
    
  // }, [selectDate]);
  const handleDateSelect = (date) => {
    const formattedDate = `${date.format("DD-MM-YYYY")}`;
    setFormData({ ...formData, date: date.toDate() });
    setopenCalendar(false);
  };

  return (
    <div className={style.flexcontainer}>
      <div className={style.calendarcontainer}>
        <div className={style.calendarheader}>
          <h1 className={style.calendarmonthyear}>
            {months[today.month()]}, {today.year()}
          </h1>
          <div className={style.calendarnavigation}>
            <GrFormPrevious
              className={style.calendarnavbtn}
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <GrFormNext
              className={style.calendarnavbtn}
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className={style.daysgrid}>
          {days.map((day, index) => (
            <h1 key={index} className={style.day}>
              {day}
            </h1>
          ))}
        </div>

        <div className={style.datesgrid}>
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today: isToday }, index) => {
              const selectable = isDateSelectable(date);
              return (
                <div key={index} className={style.day}>
                  <h1
                    className={cn(
                      currentMonth ? "" : `${style.changecolor}`,
                      isToday ? `${style.today}` : "",
                      selectDate
                        .toDate()
                        .toDateString() === date.toDate().toDateString()
                        ? `${style.selecteddate}`
                        : "",
                      !selectable ? `${style.disabled}` : "", 
                      `${style.customtailwindstyles}`
                    )}
                    onClick={() => {
                      if (selectable) {
                        setSelectDate(date);
                        handleDateSelect(date); // Pass the selected date directly
                      }
                    }}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default CalendarModal;
