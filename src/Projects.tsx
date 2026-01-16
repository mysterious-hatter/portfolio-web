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
          link="https://github.com/mysterious-hatter/go-referral-bot"
        ></ProjectItem>
        <ProjectItem
          key={1}
          name="Clothes Telegram Bot"
          description="A Telegram bot that helps users manage and choose clothes with simple commands."
          skills={["Python", "Telegram API", "Command-based interaction"]}
          link="https://github.com/mysterious-hatter/Clothes-Telegram-Bot"
        ></ProjectItem>
        <ProjectItem
          key={3}
          name="Chemical Equation Balancer"
          description="A tool for balancing chemical equations automatically (Python)."
          skills={["Python", "Algorithm design", "Text processing"]}
          link="https://github.com/mysterious-hatter/chemical-equation-balancer"
        ></ProjectItem>
        <ProjectItem
          key={4}
          name="Quadratic Equation Solver"
          description="A library for solving quadratic equations quickly in Go."
          skills={["Go", "Mathematical logic", "Library creation"]}
          link="https://github.com/mysterious-hatter/quadratic-equation-solver"
        ></ProjectItem>
        <ProjectItem
          key={5}
          name="Money Tracker"
          description="A personal finance management tool to track income and expenses in the browser."
          skills={["Web development", "Frontend logic", "Ftate handling"]}
          link="https://github.com/mysterious-hatter/money-tracker"
        ></ProjectItem>
        <ProjectItem
          key={6}
          name="Money Tracker API"
          description="A backend API supporting the money-tracker project."
          skills={["Go", "API design", "PostgreSQL"]}
          link="https://github.com/mysterious-hatter/money-tracker-api"
        ></ProjectItem>
      </div>
    </section>
  );
}
