'use client';

import styles from './ComplaintsTable.module.css';

const ComplaintsTable = ({ tableData = {}, totals,tableHeaderData=[] }) => {

  const columns = tableData.length > 0 ? Object.keys(tableData[0]) : [];
  const totalRow = totals ? Object.keys(totals).map((key) => totals[key]) : [];

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}><strong>Sr No.</strong></th>
            {tableHeaderData.map((column) => (
              column !== '_id' && (
                <th key={column} className={styles.th}>
                  <strong>{column||"Col Name"}</strong> 
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
