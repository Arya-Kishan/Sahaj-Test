"use client"
import ComplaintsTable from "./ComplaintsTable/ComplaintsTable"
import styles from './sebi.module.css';

const lastMonthData={
    
    columns : [
        { label: 'Sr_No', key: 'Sr No.' }, 
        { label: 'Received_From', key: 'Received From' },
        { label: 'Pending_as_of_last_month', key: 'Pending as of last month' },
        { label: 'Resolved', key: 'Resolved*' },
        { label: 'Total_Pendings', key: 'Total Pendings' },
        { label: 'Pendingfrom_3_Months', key: 'Pending>3months' }, 
        { label: 'AvgResolutionTime', key: 'Avg.Resolution Time' },
      ],
    data:[
      { Sr_No:'01',Received_From:'Directly from investors', Pending_as_of_last_month:0, Resolved:0, Total_Pendings :0, Pendingfrom_3_Months: 0, AvgResolutionTime:0, },
      { Sr_No:'02',Received_From:'SEBI-Scores', Pending_as_of_last_month:0, Resolved:0, Total_Pendings :0, Pendingfrom_3_Months: 0, AvgResolutionTime:0, },
      { Sr_No:'03',Received_From:'Other Sources', Pending_as_of_last_month:0, Resolved:0, Total_Pendings :0, Pendingfrom_3_Months: 0, AvgResolutionTime:0, },
    ]

}

const monthlyComplaintsData={
    
  columns : [
      { label: 'Sr_No', key: 'Sr No.' }, 
      { label: 'Month', key: 'Month' },
      { label: 'Carried_forward_from_previous_month', key: 'Carried forward from previous month' },
      { label: 'Received', key: 'Received' },
      { label: 'Resolved', key: 'Resolved*' },
      { label: 'Total_Pendings', key: 'Total Pendings' },
    ],
  data:[
    { Sr_No:'01', Month:'Oct 2023', Carried_forward_from_previous_month:0, Received:0,Resolved:0, Total_Pendings :0 },
    { Sr_No:'02', Month:'Nov 2023', Carried_forward_from_previous_month:0, Received:0,Resolved:0, Total_Pendings :0 },
    { Sr_No:'03', Month:'Dec 2023', Carried_forward_from_previous_month:0, Received:0,Resolved:0, Total_Pendings :0 },
    { Sr_No:'04', Month:'Jan 2024', Carried_forward_from_previous_month:0, Received:0,Resolved:0, Total_Pendings :0 },
    { Sr_No:'05', Month:'Feb 2024', Carried_forward_from_previous_month:0, Received:0,Resolved:0, Total_Pendings :0 },
    { Sr_No:'06', Month:'Mar 2024', Carried_forward_from_previous_month:0, Received:0,Resolved:0, Total_Pendings :0 },
    { Sr_No:'07', Month:'Apr 2024', Carried_forward_from_previous_month:0, Received:0,Resolved:0, Total_Pendings :0 },
    { Sr_No:'08', Month:'May 2024', Carried_forward_from_previous_month:0, Received:0,Resolved:0, Total_Pendings :0 },
  ],
  totals: {
    Carried_forward_from_previous_month: 0,
    Received:0,
    Resolved:0,
    Total_Pendings:0
  },
}

const annualComplaintsData={
    
  columns : [
      { label: 'Sr_No', key: 'Sr No.' }, 
      { label: 'Year', key: 'Year' },
      { label: 'Carried_forward_from_previous_month', key: 'Carried forward from previous month' },
      { label: 'Received', key: 'Received' },
      { label: 'Resolved', key: 'Resolved*' },
      { label: 'Total_Pendings', key: 'Total Pendings' },
    ],
  data:[
    { Sr_No:'01', Year:'2017-18', Carried_forward_from_previous_month:0, Received:0,Resolved:0, Total_Pendings :0 },
    { Sr_No:'02', Year:'2018-19', Carried_forward_from_previous_month:0, Received:0,Resolved:0, Total_Pendings :0 },
    { Sr_No:'03', Year:'2019-20', Carried_forward_from_previous_month:0, Received:0,Resolved:0, Total_Pendings :0 },
    { Sr_No:'04', Year:'2020-21', Carried_forward_from_previous_month:0, Received:0,Resolved:0, Total_Pendings :0 },
    { Sr_No:'05', Year:'2021-22', Carried_forward_from_previous_month:0, Received:0,Resolved:0, Total_Pendings :0 },
   ],
   totals: {
    Carried_forward_from_previous_month:0,
    Received:0,
    Resolved:0, 
    Total_Pendings:0 
  },

}

const annualComplaintsDisclosureData={
    
  columns : [
      { label: 'Sr_No', key: 'Sr No.' }, 
      { label: 'Financial_Year', key: 'Financial Year' },
      { label: 'Compliance_Audit_Status', key: 'Compliance Audit Status' },
      { label: 'Remarks_any', key: 'Remarks,if any' },
     ],
  data:[
    { Sr_No:'01', Financial_Year:'FY2020-21', Compliance_Audit_Status:"Conducted", Remarks_any:"N/A" },
    { Sr_No:'02', Financial_Year:'FY2021-22', Compliance_Audit_Status:"Conducted", Remarks_any:"N/A"},
  ]

}

const Sebi = () => {
  return (
    <div className={styles.sebiContainer}>
        <div className={styles.tableContainer}>
            <p className={styles.tableHeading}>Data as of last month : September 2024</p>
            <ComplaintsTable  content={lastMonthData}/>
        </div>
        <div className={styles.tableContainer}>
            <p className={styles.tableHeading}>Trend of monthly disposal of complaints</p>
            <ComplaintsTable  content={monthlyComplaintsData}/>
        </div>
        <div className={styles.tableContainer}>
            <p className={styles.tableHeading}>Trend of annual disposal of complaints</p>
            <ComplaintsTable  content={annualComplaintsData}/>
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
            <ComplaintsTable  content={annualComplaintsDisclosureData}/>
            
        </div>
    </div>
  )
}

export default Sebi;
