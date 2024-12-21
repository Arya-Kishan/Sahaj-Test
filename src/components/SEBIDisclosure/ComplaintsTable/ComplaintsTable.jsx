"use client"

import styles from './ComplaintsTable.module.css';

const ComplaintsTable = ({ tableData = {}, totals }) => {

  const columns = tableData.length > 0 ? Object.keys(tableData[0]) : [];
  const totalRow = totals ? Object.keys(totals).map((key) => totals[key]) : [];

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>

            <th className={styles.th}>SR No</th>
            {columns.map((column) => (
             column !== '_id' &&  <th key={column} className={styles.th}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>

          {tableData.length > 0 && tableData.map((row, index) => (
            <tr key={index} className={styles.tr}>
              <td className={styles.td}>{index + 1}</td>
              {columns.map((column) => (
               column !== '_id' &&  <td key={column} className={styles.td}>{row[column]}</td>
              ))}
            </tr>
          ))}


          {totalRow.length > 0 && (
            <tr className={`${styles.tr} ${styles.totaltr}`}>
              <td className={styles.td}></td>
              {columns.map((column, colIndex) => (

                <td key={colIndex} className={styles.td}>

                  {colIndex === 0
                    ? <strong>Total</strong>
                    : totals[column] != null
                      ? <strong>{totals[column]}</strong>
                      : ''}

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
