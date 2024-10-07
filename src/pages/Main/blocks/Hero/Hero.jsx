import { Container } from 'components/Container';
import couple from 'assets/images/main.webp';
import styles from 'pages/Main/blocks/Hero/Hero.scss';

export const Hero = () => (
  <div className={styles.hero}>
    <Container className={styles.align}>
      <section className={styles.wrapper}>
        <h1 className={styles.title}>
          Клуб бального танцю
          <br />
          «Діамант-Еліт»
        </h1>
        <p className={styles.subtitle}>
          Ми дружня професійна команда.
          <br />
          Наша мета - вдосконалюватись
          <br />
          та робити світ кращим.
          <br />
          <br />
          Приєднуйся до нас!
          <br />
          Танцюй і отримуй задоволення.
        </p>
      </section>
      <img src={couple} alt='ballroom couple' />
    </Container>
  </div>
);
