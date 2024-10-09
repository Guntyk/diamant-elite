import { useState } from 'react';
import cn from 'classnames';
import { locations } from 'constants/locations';
import { Container } from 'components/Container';
import styles from 'pages/Main/blocks/Locations/Locations.scss';

export const Locations = () => {
  const [activeMapID, setActiveMapID] = useState(1);

  const activeMap = locations.find(({ id }) => id === activeMapID);

  return (
    <article className={styles.locations}>
      <Container>
        <div className={styles.wrapper}>
          <section className={styles.listBlock}>
            <h4 className={styles.title}>Зали та філії</h4>
            <ul className={styles.list}>
              {locations.map(({ id, title }) => (
                <li className={styles.mark} onClick={() => setActiveMapID(id)} key={id}>
                  {title}
                </li>
              ))}
            </ul>
            <button data-fancybox data-src='#dialog-content' className={cn(styles.button, styles.button__mt20)}>
              Зателефонувати
            </button>
          </section>
          <iframe
            src={activeMap.map}
            width='700'
            height='400'
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
            className={styles.map}
            title={activeMap.alt}
          />
        </div>
      </Container>
    </article>
  );
};
