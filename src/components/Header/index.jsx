import Logo from "../../assets/rfb.jpg";
import styles from "./style.module.scss";
export const Header = () => {
    
    return (
        <header className={styles.container}>
          <img src={Logo} alt="logo" />
        </header>
        );
}