import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import { useEffect } from 'react';
import { directions } from 'constants/directions';
import { Container } from 'components/Container';
import styles from 'pages/Directions/Directions.scss';

export const Directions = () => {
  const { pathname } = useLocation();

  const { key, title, text } = directions.find(({ route }) => route === pathname) || {};

  useEffect(() => {
    if (title) {
      window.scrollTo(0, 0);
    }
  }, [title]);

  return (
    <>
      <span className={cn(styles.wallpaper, styles[key])} />
      <article className={styles.hero}>
        <h1 className={styles.title}>{title}</h1>
      </article>
      <article className={styles.content}>
        <Container>
          <div>
            <p>{text}</p>
          </div>
        </Container>
      </article>
    </>
  );
};
