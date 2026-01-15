import styles from "./Contacts.module.css";
import linkedInIcon from "../public/linkedin.svg";
import gitHubIcon from "../public/github.svg";
import emailIcon from "../public/email.svg";

export default function Contacts() {
    return (
        <section id="contacts" className={styles["contacts"]}>
            <h2 className={styles["section-name"]}>
                <span className={styles["terminal"]}>root@root:~$ ls </span>
                <span className={styles["accent"]}>Contacts</span>
            </h2>
            <div className={styles["contacts-list"]}>
                <a href="https://www.linkedin.com/in/grigorii-eidelkind-3b3777335/">
                    <p className={styles["item-name"]}>LinkedIn</p>
                    <img className={styles["item-icon"]} src={linkedInIcon}></img>
                    <p className={styles["label"]}></p>
                </a>
                <a href="https://github.com/mysterious-hatter">
                    <p className={styles["item-name"]}>GitHub</p>
                    <img className={styles["item-icon"]} src={gitHubIcon}></img>
                    <p className={styles["label"]}>@mysterious-hatter</p>
                </a>
                <a href="mailto:grigorii.eidelkind@gmail.com">
                    <p className={styles["item-name"]}>Email</p>
                    <img className={styles["item-icon"]} src={emailIcon}></img>
                    <p className={styles["label"]}>grigorii.edielkind@gmail.com</p>
                </a>
            </div>
        </section>
    );
}