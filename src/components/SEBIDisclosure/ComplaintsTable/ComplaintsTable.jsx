"use client"
import styles from './ComplaintsTable.module.css';

const ComplaintsTable = ({content}) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.columntr}>
            {content.columns.map((column, index) => (
              <th key={index} className={styles.th}>
                {column.key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.data.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles.tr}>
              {content.columns.map((column, colIndex) => (
                <td key={colIndex} className={styles.td}>

                  {row[column.label] != null ? row[column.label] : '-'}

                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplaintsTable;
