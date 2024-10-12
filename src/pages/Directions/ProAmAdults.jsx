import cn from 'classnames';
import { Container } from 'components/Container';
import styles from 'pages/Directions/Directions.scss';

export const ProAmAdults = () => (
  <>
    <span className={cn(styles.wallpaper, styles.proAmAdults)} />
    <article className={styles.hero}>
      <h1 className={styles.title}>Pro-Am для дорослих</h1>
    </article>
    <article className={styles.content}>
      <Container>
        <div className={styles.text}>
          <p className={styles.descr}>
            Реалізація спортивного та творчого внутрішнього потенціалу можлива в
            парі з професійним партнером. Pro-Am – це особлива форма навчання,
            де ваш тренер одночасно й ваш партнер. Ця система допомагає якісно,
            швидко та комфортно оволодіти майстерністю бального танцю. Ви маєте
            можливість як танцювати для себе, так і брати участь у різноманітних
            Pro-Am змаганнях та івентах.
          </p>
        </div>
      </Container>
    </article>
  </>
);
