import styles from "./About.module.css";
import meImg from '../public/me.png'; 

export default function About() {
    return (
        <section id="about" className={styles["about"]}>
            <div id="text" className={styles["text"]}>
                <p className={styles["hello-world"]}>Hello world,</p>
                <h1 className={styles["my-name"]}>my name is Grigorii.</h1>
                <h1 className={styles["software-engineer"]}>I am a software engineer.</h1>
                <p className={styles["self-description"]}>I’m a Computer Science student with hands-on development experience, focused on building efficient, reliable solutions. I’ve worked on real-world projects, taking full ownership from idea to implementation, and I quickly adapt to new technologies with a professional, results-driven mindset.</p>
                <p className={styles["subtitle"]}><span className={styles["terminal"]}>root@root:~$ skills </span><span className={styles["subtitle-accent"]}>--hard</span></p>
                <ul className={styles["skills"]}>
                    <li>Python</li>
                    <li>Go</li>
                    <li>TypeScript</li>
                    <li>REST API</li>
                    <li>PostgreSQL</li>
                    <li>Git</li>
                </ul>
                <p className={styles["subtitle"]}><span className={styles["terminal"]}>root@root:~$ skills </span><span className={styles["subtitle-accent"]}>--soft</span></p>
                <ul className={styles["skills"]}>
                    <li>Independent problem solving</li>
                    <li>Fast learner</li>
                    <li>End-to-end responsibility</li>
                </ul>
            </div>
            <div id="photo">
                <img src={meImg} alt="" className={styles["me-img"]}/>
            </div>
        </section>
    );
}