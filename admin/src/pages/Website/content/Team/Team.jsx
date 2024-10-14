import { team } from 'constants/team';
import styles from 'pages/Website/content/Team/Team.scss';

export const Team = () => {
  return (
    <section className={styles.team}>
      <div className={styles.header}>
        <h2 className={styles.title}>Команда</h2>
        <button className={styles.createBtn}>Додати</button>
      </div>
      <ul className={styles.teamList}>
        {team.map(({ id, name, surname, role, workplace, biography, photo }) => (
          <li className={styles.employee} key={id}>
            <div className={styles.photo}>
              <img src={photo} alt={name} />
            </div>
            <p>
              {surname} {name}
            </p>
            <p>{role}</p>
            <p>{workplace}</p>
            <p className={styles.biography}>{biography}</p>
            <div className={styles.buttons}>
              <button className={styles.deleteBtn}>Видалити</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
