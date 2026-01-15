import styles from "./ProjectItem.module.css";

type ProjectItemProps = {
    name: string,
    description: string,
    skills: Array<string>
};

export default function ProjectItem({name, description, skills}: ProjectItemProps) {
    return (
        <div className={styles["project-item"]}>
            <p className={styles["name"]}>{name}</p>
            <p className={styles["description"]}>{description}</p>
            <p className={styles["key-skills"]}>Key skills:</p>
            <ul className={styles["skills"]}>
            {
                skills.map((skill) => (
                    <li>{skill}</li>
                ))
            }
            </ul>
        </div>
    );
}