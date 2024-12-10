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
      { Sr_No:'01',Received_From:'Directly from investors', Pending_as_of_last_month:'0', Resolved:0, Total_Pendings :0, Pendingfrom_3_Months: 0, AvgResolutionTime:0, },
      { Sr_No:'02',Received_From:'SEBI-Scores', Pending_as_of_last_month:0, Resolved:0, Total_Pendings :0, Pendingfrom_3_Months: 0, AvgResolutionTime:0, },
      { Sr_No:'03',Received_From:'Other Sources', Pending_as_of_last_month:0, Resolved:0, Total_Pendings :0, Pendingfrom_3_Months: 0, AvgResolutionTime:0, },
    ]

}

const Sebi = () => {
  return (
    <div className={styles.sebiContainer}>
        <div className={styles.tableContainer}>
            <p className={styles.tableHeading}>Data as of last month : September 2024</p>
            <ComplaintsTable  content={lastMonthData}/>
        </div>
    </div>
  )
}

export default Sebi
