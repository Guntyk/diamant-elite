import { useState } from 'react';
import { locations } from 'constants/locations';
import { Container } from 'components/Container';
import { Button } from 'components/Button';
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
            <Button className={styles.btn} phoneBtn>
              Зателефонувати
            </Button>
          </section>
          <iframe
            src={activeMap.map}
            width='700'
            height='400'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className={styles.map}
            title={activeMap.alt}
          />
        </div>
      </Container>
    </article>
  );
};
