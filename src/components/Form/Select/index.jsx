import styles from "./style.module.scss";
export const Select = ({id, label, setValue}) => {
    
    return (
        <div className={styles.selectBox}>
          <label htmlFor={id} className="label">{label}</label>
          <select id={id} onChange={(e) => setValue(e.target.value)}>
            <option value="entry">Entry</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        );
}