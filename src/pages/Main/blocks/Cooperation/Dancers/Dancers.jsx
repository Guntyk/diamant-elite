import cn from 'classnames';
import { Link } from 'react-router-dom';
import arrow from 'assets/icons/arrows/arrow-small.svg';
import arrowWide from 'assets/icons/arrows/arrow-big.svg';
import styles from 'pages/Main/blocks/Cooperation/Dancers/Dancers.scss';

export const Dancers = () => {
  return (
    <section className={styles.dancer}>
      <div className={styles.dancer__content}>
        <Link to='/kids-ballroom' className={styles.dancer__item}>
          <h2>
            Бальні танці
            <br />
            для дітей
          </h2>
          <img src={arrow} alt='arrow' className={styles.dancer__arrow} />
        </Link>
        <Link to='/online' className={styles.dancer__item}>
          <h2>Онлайн навчання</h2>
          <img src={arrow} alt='arrow' className={styles.dancer__arrow} />
        </Link>
        <Link to='/kids-pro-am' className={styles.dancer__item}>
          <h2>
            Pro-Am для
            <br />
            дітей
          </h2>
          <img src={arrow} alt='arrow' className={styles.dancer__arrow} />
        </Link>
        <Link to='/adults-pro-am' className={styles.dancer__item}>
          <h2>
            Pro-Am для
            <br />
            дорослих
          </h2>
          <img src={arrow} alt='arrow' className={styles.dancer__arrow} />
        </Link>
        <Link to='/ballroom-dance' className={styles.dancer__item}>
          <h2>Спортивні бальні танці</h2>
          <img src={arrowWide} alt='arrow' className={cn(styles.dancer__arrow, styles.dancer__arrow_big)} />
        </Link>
      </div>
    </section>
  );
};
