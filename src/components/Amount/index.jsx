import styles from "./style.module.scss";

 export const Amount = ({listElements}) => {
    let add = listElements.reduce((prevValue, currentValue) =>
     {
         const newNumber = parseInt(currentValue.number)
         if (currentValue.category === "entry" ) {
             return prevValue + newNumber
         }
         if (currentValue.category === "expense") {
             return  prevValue - newNumber
             }
     }, 0)
     
     
    const dollar = add.toLocaleString("en-US", {style: "currency", currency: "USD"})
     return (
         <>
           <div className="container">
             <div className={styles.flex}>
               <h3 className="title three">Amount:</h3>
               <span className="title three">{dollar}</span>
              </div>
              <p className={`paragraph disable ${styles.text}`}>The value refers to the balance</p>
           </div>
         </>
         );
 }