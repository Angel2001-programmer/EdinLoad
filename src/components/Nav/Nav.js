import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav className={styles.nav}>
            <Link className={styles.link} to = "/"><h2 className={styles.logo}>Edinload</h2></Link>
        </nav>
    )
}

export default Nav;
