import styles from "./style.module.scss"
export const ListCard = ({title, choose, id, balance, removeElement}) => {
    return (
        <div className={`${styles.box} ${choose === "entry" ? styles.orange : styles.black}`}>    
          <div>
            <h3 className="title three">{title}</h3>
            <p className="paragraph">{choose}</p>
          </div>    
          <div>
            <p className="paragraph">{balance}</p>
            <button className="btnStyle small" onClick={() => removeElement(id)}>Delete</button>
          </div>
        </div>
        );
}