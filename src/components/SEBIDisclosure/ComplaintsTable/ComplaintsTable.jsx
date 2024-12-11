import { useState, useEffect } from 'react';
import styles from './ComplaintsTable.module.css';

const ComplaintsTable = ({ content }) => {

  const [rows, setRows] = useState(content.data || []);
  const [isClient, setIsClient] = useState(false);

  // Ensuring client-side rendering to Prevent Hydration error
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setRows(content.data || []);
  }, [content]);

  const handleStatusChange = (index, newStatus) => {
    const updatedRows = [...rows];
    updatedRows[index].Compliance_Audit_Status = newStatus;
    setRows(updatedRows);
  };

  if (!isClient) {
    return <div>Loading...</div>; 
  }
 
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
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles.tr}>
              {content.columns.map((column, colIndex) => (
                <td key={colIndex} className={styles.td}>
                  {column.label === 'Compliance_Audit_Status' ? (
                    <input
                      type="text"
                      value={row.Compliance_Audit_Status || ""}
                      onChange={(e) => handleStatusChange(rowIndex, e.target.value)}
                      className={styles.tableInput}
                    />
                  ) : (
                    row[column.label] != null ? row[column.label] : '-'
                  )}
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
