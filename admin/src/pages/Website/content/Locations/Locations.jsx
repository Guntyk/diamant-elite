import { useDispatch, useSelector } from 'react-redux';
import { getLocations, createLocation, deleteLocation } from '@redux/features/locationsSlice';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { Modal } from 'components/Modal';
import styles from 'pages/Website/content/content.scss';

export const Locations = () => {
  const { isLoading, error, locations } = useSelector((state) => state.locations);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (locations.length === 0) {
      dispatch(getLocations());
    }
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();

    const { name, address, map } = e.target;

    const newLocationData = {
      name: name.value,
      address: address.value,
      map: map.value,
    };

    dispatch(createLocation(newLocationData));

    setIsCreateModalOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteLocation(id));
  };

  return (
    <section className={styles.content}>
      <div className={styles.header}>
        <h2 className={styles.title}>Локації</h2>
        {isLoading && <p>Завантаження...</p>}
        <button className={styles.createBtn} onClick={() => setIsCreateModalOpen(true)}>
          Додати
        </button>
      </div>
      <ul className={styles.contentList}>
        {locations.map(({ id, name, address, map }) => (
          <li className={cn(styles.contentItem, styles.location)} key={id}>
            <p>{name}</p>
            <p>{address}</p>
            <p>{map}</p>
            <div className={styles.buttons}>
              <button className={styles.deleteBtn} onClick={() => handleDelete(id)}>
                Видалити
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Modal isOpen={isCreateModalOpen} setIsOpen={setIsCreateModalOpen}>
        <h3 className={styles.title}>Додати нову локацію</h3>
        <form className={styles.form} onSubmit={handleCreate}>
          <input name='name' className={styles.input} placeholder='Назва локації' type='text' />
          <input name='address' className={styles.input} placeholder='Адреса' type='text' />
          <textarea name='map' className={styles.input} placeholder='Посилання на гугл мапу' type='text' />
          <button type='submit' className={styles.addBtn}>
            Додати
          </button>
        </form>
      </Modal>
      {error && <p>{error}</p>}
    </section>
  );
};
