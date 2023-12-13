import { useState } from "react";
import { Input } from "./Input";
import { Select } from "./Select";
import { Amount } from "../Amount";
import styles from "./style.module.scss";
export const Form = ({listElements, addElement}) => {
    const [description, setDescription] = useState("");
    const [number, setNumber] = useState("");
    const [category, setCategory] = useState("entry");
    
    function handleSubmit(e) {
        e.preventDefault()
        if (description !== "" && number !== ""){
        addElement(description, number, category)
        setDescription("")
        setNumber("")
        }
    }
    return (
        <section className={styles.container}>
          <form className="container" onSubmit={handleSubmit}>
            <Input
             label="Description" 
             type="text" 
             id="description" 
             placeholder="Enter the description" 
             value={description} 
             setValue={setDescription} />  
             <p className="paragraph disable">Ex: Buying clothes</p>
             <Input
             label="Value ($)" 
             type="number" 
             id="number" 
             placeholder="Enter the number" 
             value={number} 
             setValue={setNumber} />
             <Select
             label="Value type" 
             id="select" setValue={setCategory} />
             <button type="submit" className="btnStyle full">Enter value</button>
          </form>
          <div>
            <Amount listElements={listElements} addElement={addElement} />
          </div>
        </section>
        );
}