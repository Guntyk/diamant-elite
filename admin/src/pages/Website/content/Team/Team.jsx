import { useDispatch, useSelector } from 'react-redux';
import { getTeam, deleteEmployee } from '@redux/features/teamSlice';
import styles from 'pages/Website/content/Team/Team.scss';
import { useEffect } from 'react';

export const Team = () => {
  const { isLoading, error, team } = useSelector((state) => state.team);
  const dispatch = useDispatch();

  useEffect(() => {
    if (team.length === 0) {
      dispatch(getTeam());
    }
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  return (
    <section className={styles.team}>
      <div className={styles.header}>
        <h2 className={styles.title}>Команда</h2>
        {isLoading && <p>Завантаження...</p>}
        <button className={styles.createBtn}>Додати</button>
      </div>
      <ul className={styles.teamList}>
        {team.map(({ id, name, surname, job, workplace, biography, photo }) => (
          <li className={styles.employee} key={id}>
            <div className={styles.photo}>
              <img src={photo} alt={name} />
            </div>
            <p>
              {surname} {name}
            </p>
            <p>{job}</p>
            <p>{workplace}</p>
            <p className={styles.biography}>{biography}</p>
            <div className={styles.buttons}>
              <button className={styles.deleteBtn} onClick={() => handleDelete(id)}>
                Видалити
              </button>
            </div>
          </li>
        ))}
      </ul>
      {error && <p>{error}</p>}
    </section>
  );
};
