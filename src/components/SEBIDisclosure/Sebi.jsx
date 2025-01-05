"use client"
import ComplaintsTable from "./ComplaintsTable/ComplaintsTable"
import styles from './sebi.module.css';
import { format } from 'date-fns';

const Sebi = ({lastMonthData,monthTrendData,yearTrendData,annualTrendData,tableHeaderData=[]}) => {
  let formattedDate;
  try {
   
    let date = lastMonthData?.LastMonth ? new Date(lastMonthData.LastMonth) : null;

    // If the date is invalid or unavailable, first day of the previous month will show
    if (!date || isNaN(date)) {
      const now = new Date(); 
      date = new Date(now.getFullYear(), now.getMonth() - 1, 1); 
    }

    formattedDate = format(date, 'MMMM dd, yyyy');
  } catch (error) {
    console.error('Date formatting error:', error);
    formattedDate = 'Date unavailable'; 
  }

  return (
    <div className={styles.sebiContainer}>
         <div className={styles.tableContainer}>
            <p className={styles.tableHeading}>Data as of last month :{formattedDate}</p>
            <ComplaintsTable   tableData={lastMonthData?.Table}  tableHeaderData={tableHeaderData[0]?.columns}/>
        </div>
       <div className={styles.tableContainer}>
            <p className={styles.tableHeading}>Trend of monthly disposal of complaints</p>
            <ComplaintsTable   tableData={monthTrendData?.structureData} totals={monthTrendData?.totals} tableHeaderData={tableHeaderData[1]?.columns}/>
        </div>
        
        <div className={styles.tableContainer}>
            <p className={styles.tableHeading}>Trend of annual disposal of complaints</p>
            <ComplaintsTable    tableData={yearTrendData?.structureData} totals={yearTrendData?.totals} tableHeaderData={tableHeaderData[2]?.columns}/>
            <p className={styles.note}>
              <span>*</span> Inclusive of complaints of previous months/years resolved in the current
              month/year | ^ Time in days | # Inclusive of complaints pending as on last day of the month/year
            </p>
        </div>
        <div className={styles.tableContainer}>
            <p className={styles.tableHeading}>Annual Compliance Disclosure</p>
            <p className={styles.text}>Disclosure with respect to compliance with Annual compliance audit
               requirement under Regulation 19(3) of SEBI (Investment Advisers) 
               Regulations, 2013 for the previous and current financial year are as under:
            </p>
            <ComplaintsTable   tableData={annualTrendData} tableHeaderData={tableHeaderData[3]?.columns}/>
            
        </div>
    </div>
   
  )
}

export default Sebi;
