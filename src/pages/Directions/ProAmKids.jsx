import cn from 'classnames';
import { Container } from 'components/Container';
import styles from 'pages/Directions/Directions.scss';

export const ProAmKids = () => (
  <>
    <span className={cn(styles.wallpaper, styles.proAmKids)} />
    <article className={styles.hero}>
      <h1 className={styles.title}>Pro-Am для дітей</h1>
    </article>
    <article className={styles.content}>
      <Container>
        <div className={styles.text}>
          <p className={styles.descr}>
            Якщо ваша дитина хоче займатись бальними танцями та ще в пошуках
            партнера, ми пропонуємо систему дитячого танцювання Pro-Am, де
            партнером для дитини може стати як діючий танцюрист-спортсмен, так і
            ваш тренер. Це дає можливість якнайшвидше вивчити програму,
            опанувати техніку виконання та брати участь у змаганнях, також
            укріплює впевненість у собі під час виступів перед глядачем.
          </p>
        </div>
      </Container>
    </article>
  </>
);
