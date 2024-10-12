import { Button } from 'components/Button';
import kids from 'assets/images/trainers/trainers.webp';
import styles from 'pages/Main/blocks/Cooperation/Coaches/Coaches.scss';

export const Coaches = () => (
  <section className={styles.trainer}>
    <div className={styles.wrapper}>
      <img src={kids} alt='kids' />
      <div className={styles.trainer__wrapper}>
        <h4 className={styles.title}>Запрошуємо вас до співпраці</h4>
        <p className={styles.subtitle}>Проводьте групові та індивідуальні заняття в наших залах</p>
        <Button className={styles.btn} phoneBtn>
          Зателефонувати
        </Button>
      </div>
    </div>
  </section>
);
