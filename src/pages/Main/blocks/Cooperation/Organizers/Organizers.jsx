import cn from 'classnames';
import hall1 from 'assets/images/halls/lubidsky/1.webp';
import hall2 from 'assets/images/halls/pozniaky/1.webp';
import styles from 'pages/Main/blocks/Cooperation/Organizers/Organizers.scss';

export const Organizers = () => (
  <section className={styles.organizer}>
    <h3 className={styles.organizer__title}>Оренда приміщень</h3>
    <div className={styles.organizer__wrapper}>
      <div className={styles.organizer__content}>
        <div className={styles.organizer__card}>
          <img src={hall1} alt='1' className={styles.galleryPhoto} />
          <p className={styles.organizer__address}>Простора зала, поряд ст. метро «Либідська»</p>
          <a
            href='https://goo.gl/maps/ykHk92aBg5vsnDkF7'
            target='_blank'
            rel='nofollow noopener noreferrer'
            className={cn(styles.organizer__address, styles.href)}
          >
            (вул. Залізничне шосе, 3)
          </a>
        </div>
        <div className={styles.organizer__card}>
          <img src={hall2} alt='1' className={styles.galleryPhoto} />
          <p className={styles.organizer__address}>Велика та світла зала, поряд ст. метро «Позняки»</p>
          <a
            href='https://goo.gl/maps/wtovPVVdX8m9jffa6'
            target='_blank'
            rel='nofollow noopener noreferrer'
            className={cn(styles.organizer__address, styles.href)}
          >
            (вул. Лариси Руденко, 6А)
          </a>
        </div>
      </div>
      <div className={styles.organizer__reasons}>
        <h4 className={styles.organizer__subtitle}>В наших залах ви можете провести:</h4>
        <ul>
          <li>Майтер класи</li>
          <li>Семінари</li>
          <li>Вечірки</li>
          <li>Конгреси</li>
        </ul>
      </div>
    </div>
  </section>
);
