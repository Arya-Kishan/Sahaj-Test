'use client';

import styles from './ComplaintsTable.module.css';

const ComplaintsTable = ({ tableData = {}, totals, tableType,tableHeaderData=[] }) => {
  // Define the column mappings for each table type
  const columnMappings = {
    lastMonth: {
      "Received From": "ReceivedFrom",
      "Pending as of last month": "PendingLastMonth",
      "Received": "Received",
      "Resolved*": "Resolved",
      "Total Pending#": "TotalPending",
      "Pending >3 months": "Pending3Month",
      "Avg. Resolution Time^": "AverageResolutionTime"
    },
    monthlyTrend: {
      "Month": "month",
      "Carried forward from previous month": "Carried_forward_from_previous_month",
      "Received": "Received",
      "Resolved*": "Resolved",
      "Total Pending#": "Pending"
    },
    annualTrend: {
      "Year": "year",
      "Carried forward from previous month": "carriedForward",
      "Received": "received",
      "Resolved": "resolved",
      "Total Pending#": "pending"
    },
    annualCompliance: {
      "Financial Year": "year",
      "Compliance Status": "status",
      "Remarks, if any": "remark"
    }
  };

  // Get the columns for the selected table type
  const columns = tableData.length > 0 ? Object.keys(tableData[0]) : [];
  const totalRow = totals ? Object.keys(totals).map((key) => totals[key]) : [];
  const currentMapping = columnMappings[tableType] || {};
console.log("the haaa",tableHeaderData)
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}><strong>SR No</strong></th>
            {tableHeaderData.map((column) => (
              column !== '_id' && (
                <th key={column} className={styles.th}>
                  <strong>{column}</strong> 
                </th>
              )
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 && tableData.map((row, index) => (
            <tr key={index} className={styles.tr}>
              <td className={styles.td}>{index + 1}</td>
              {columns.map((column) => (
                column !== '_id' && <td key={column} className={styles.td}>{row[column]}</td>
              ))}
            </tr>
          ))}

          {totalRow.length > 0 && (
            <tr className={`${styles.tr} ${styles.totaltr}`}>
              <td className={styles.td}></td>
              <td className={styles.td}><strong>Total</strong></td>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className={styles.td}>
                  <strong>{totalRow[colIndex] ?? ''}</strong>
                </td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ComplaintsTable;
