import cn from 'classnames';
import { Container } from 'components/Container';
import styles from 'pages/Directions/Directions.scss';

export const KidsBallroom = () => (
  <>
    <span className={cn(styles.wallpaper, styles.kids)} />
    <article className={styles.hero}>
      <h1 className={styles.title}>Бальні танці для дітей</h1>
    </article>
    <article className={styles.content}>
      <Container>
        <div className={styles.text}>
          <p className={styles.descr}>
            Кожна людина має навчитися танцювати. Основна закладка базових
            навичок відбувається в ранньому віці. Бальні танці сприяють
            фізичному та духовному розвитку дитини. Бальні танці – це не лише
            постава та хода, це вміння проявляти емоції через танець,
            працьовитість, звільнення від комплексів, закладка правильного
            спілкування зпротилежною статтю, естетичне виховання та розвиток
            двох півкуль мозку.
          </p>
        </div>
      </Container>
    </article>
  </>
);
