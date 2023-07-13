import { FacebookLogo, TwitterLogo, GoogleLogo, InstagramLogo, MagnifyingGlass } from "phosphor-react";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_menu}>
        <h1>Shopi</h1>
        <nav className={styles.header_links}>
          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">posts formats</a>
            </li>
            <li>
              <a href="#">pages</a>
            </li>
            <li>
              <a href="#">purchase</a>
            </li>
          </ul>
        </nav>
      </div>
      <nav className={styles.nav_links}>
        <ul>
          <li>
            <a href="#">
              <FacebookLogo size={25} />
            </a>
          </li>
          <li>
            <a href="#">
              <TwitterLogo size={25} />
            </a>
          </li>
          <li>
            <a href="#">
              <InstagramLogo size={25} />
            </a>
          </li>
          <li>
            <a href="#">
              <GoogleLogo size={25} />
            </a>
          </li>
          {/* <li className={styles.nav_search}>
            <a href="#">
              <MagnifyingGlass size={25} />
            </a>
            <input />
          </li> */}
        </ul>
      </nav>
    </header>
  )
}
