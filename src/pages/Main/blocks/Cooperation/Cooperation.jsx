import cn from 'classnames';
import { useState } from 'react';
import { Container } from 'components/Container';
import { Organizers } from 'pages/Main/blocks/Cooperation/Organizers';
import { Coaches } from 'pages/Main/blocks/Cooperation/Coaches';
import { Dancers } from 'pages/Main/blocks/Cooperation/Dancers';
import styles from 'pages/Main/blocks/Cooperation/Cooperation.scss';

export const Cooperation = () => {
  const [openedSectionID, setOpenedSectionID] = useState(1);

  const sections = [
    { id: 1, Component: Dancers, title: 'Танцюристам та батькам' },
    { id: 2, Component: Organizers, title: 'Організаторам заходів' },
    { id: 3, Component: Coaches, title: 'Тренерам та хореографам' },
  ];

  const CurrentSectionComponent = sections.find(({ id }) => id === openedSectionID).Component;

  return (
    <section className={styles.cooperation}>
      <Container>
        <nav id='selector' className={styles.selector}>
          <ul className={styles.list}>
            {sections.map(({ id, title }) => (
              <li
                className={cn(styles.item, { [styles.active]: id === openedSectionID })}
                onClick={() => setOpenedSectionID(id)}
              >
                {title}
              </li>
            ))}
          </ul>
        </nav>
        <CurrentSectionComponent />
      </Container>
    </section>
  );
};
