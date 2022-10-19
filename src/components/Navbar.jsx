import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import svgLogo from "../assets/favicon.svg";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.navLinks}>
        <li className={styles.logo}>
          <img width={35} src={svgLogo} alt="Logo" />
        </li>
        <li>
          <Link to={"/akian-crypto-tracker"} className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/akian-crypto-tracker/top40cryptos"}
            className={styles.link}
          >
            Top 40 Coins
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
