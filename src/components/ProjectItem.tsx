import styles from "./ProjectItem.module.css";

type ProjectItemProps = {
    name: string,
    description: string,
    skills: Array<string>,
    link: string
};

export default function ProjectItem({name, description, skills, link}: ProjectItemProps) {
    return (
        <div className={styles["project-item"]}>
            <p className={styles["name"]}>{name}</p>
            <p className={styles["description"]}>{description}</p>
            <div className={styles["bottom-block"]}>
                <div className={styles["skills-block"]}>
                    <p className={styles["key-skills"]}>Key skills:</p>
                    <ul className={styles["skills"]}>
                    {
                        skills.map((skill) => (
                            <li>{skill}</li>
                        ))
                    }
                    </ul>
                </div>
                <a href={link}>
                    <img src="/github.svg" alt="GitHub" />
                </a>
            </div>
        </div>
    );
}