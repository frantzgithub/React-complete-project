import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { List } from "../../components/List";
import styles from "./style.module.scss";
export const HomePage = ({listElements, addElement, removeElement}) => {
    
    return (
        <div className={styles.container}>
          <Header />
          <main>
            <Form listElements={listElements} addElement={addElement} />
            <List listElements={listElements} removeElement={removeElement} />
          </main>
        </div>
        );
}