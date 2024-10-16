import { useDispatch, useSelector } from 'react-redux';
import { createLocation, getLocations, updateLocation, deleteLocation } from '@redux/features/locationsSlice';
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

  const handleUpdate = (id, field, value, previousValue) => {
    const updatedLocationData = {
      [field]: value,
    };

    dispatch(updateLocation({ id, updatedLocationData }))
      .unwrap()
      .catch(() => {
        document.getElementById(`${field}-${id}`).textContent = previousValue;
      });
  };

  const handleDelete = (id) => {
    dispatch(deleteLocation(id));
  };

  const handleEdit = (id, field, previousValue) => {
    const element = document.getElementById(`${field}-${id}`);
    const input = document.createElement('input');
    input.value = element.textContent;
    input.className = styles.inputInline;
    element.replaceWith(input);

    input.focus();

    input.addEventListener('blur', () => {
      const newValue = input.value.trim();
      if (newValue && newValue !== previousValue) {
        handleUpdate(id, field, newValue, previousValue);
        input.replaceWith(element);
      } else {
        input.replaceWith(element);
        element.textContent = previousValue;
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        input.blur();
      }
    });
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
            <p id={`name-${id}`} onClick={() => handleEdit(id, 'name', name)}>
              {name}
            </p>
            <p id={`address-${id}`} onClick={() => handleEdit(id, 'address', address)}>
              {address}
            </p>
            <p id={`map-${id}`} onClick={() => handleEdit(id, 'map', map)}>
              {map}
            </p>
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
