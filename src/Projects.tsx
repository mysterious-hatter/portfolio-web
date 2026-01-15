import ProjectItem from "./components/ProjectItem";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles["projects"]}>
      <h2 className={styles["section-name"]}>
        <span className={styles["terminal"]}>root@root:~$ ls </span>
        <span className={styles["accent"]}>Projects</span>
      </h2>
      <div id="projects-list" className={styles["projects-list"]}>
        <ProjectItem
          key={0}
          name="Referral Telegram Bot"
          description="A Telegram bot that manages referral links and tracks user referrals."
          skills={["Go", "Telegram API", "Excel"]}
        ></ProjectItem>
        <ProjectItem
          key={1}
          name="Referral Telegram Bot"
          description="A Telegram bot that manages referral links and tracks user referrals."
          skills={["Go", "Telegram API", "Excel"]}
        ></ProjectItem>
        <ProjectItem
          key={3}
          name="Referral Telegram Bot"
          description="A Telegram bot that manages referral links and tracks user referrals."
          skills={["Go", "Telegram API", "Excel"]}
        ></ProjectItem>
      </div>
    </section>
  );
}
