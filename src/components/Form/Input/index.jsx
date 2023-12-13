import styles from "./style.module.scss";
export const Input = ({id, label, type, placeholder, value, setValue}) => {
    
    return (
        <div className={styles.inputBox}>
          <label htmlFor={id} className="label">{label}</label>
          <input type={type} id={id} name={id} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
        );
}