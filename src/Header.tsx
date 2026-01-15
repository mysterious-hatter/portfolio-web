import styles from "./Header.module.css";

export default function Header() {
    return (
      <header className={styles["header"]}>
        <nav className={styles["navbar"]}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contacts">Contacts</a>
        </nav>
        <div id="lang-switch">
          
        </div>
    </header>
  );
};