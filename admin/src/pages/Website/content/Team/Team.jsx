import { createEmployee, getTeam, deleteEmployee } from '@redux/features/teamSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Modal } from 'components/Modal';
import styles from 'pages/Website/content/Team/Team.scss';

export const Team = () => {
  const { isLoading, error, team } = useSelector((state) => state.team);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (team.length === 0) {
      dispatch(getTeam());
    }
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();

    const { surname, name, job, workplace, biography } = e.target;

    const newEmployeeData = {
      surname: surname.value,
      name: name.value,
      job: job.value,
      workplace: workplace?.value,
      biography: biography.value,
    };

    dispatch(createEmployee(newEmployeeData));

    setIsCreateModalOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  return (
    <section className={styles.team}>
      <div className={styles.header}>
        <h2 className={styles.title}>Команда</h2>
        {isLoading && <p>Завантаження...</p>}
        <button className={styles.createBtn} onClick={() => setIsCreateModalOpen(true)}>
          Додати
        </button>
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
      <Modal isOpen={isCreateModalOpen} setIsOpen={setIsCreateModalOpen}>
        <h3 className={styles.title}>Додати нового співробітника</h3>
        <form className={styles.form} onSubmit={handleCreate}>
          <input value='Назаренко' name='surname' className={styles.input} placeholder='Прізвище' type='text' />
          <input value='Марина' name='name' className={styles.input} placeholder="Ім'я" type='text' />
          <input value='Виконавчий директор' name='job' className={styles.input} placeholder='Посада' type='text' />
          <input value='Либідська' name='workplace' className={styles.input} placeholder='Місце роботи' type='text' />
          <textarea
            value='Проведення заходів'
            name='biography'
            className={styles.input}
            placeholder='Біографія'
            type='text'
          />
          <button type='submit' className={styles.addBtn}>
            Додати
          </button>
        </form>
      </Modal>
      {error && <p>{error}</p>}
    </section>
  );
};
