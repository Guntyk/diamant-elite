import styles from 'pages/Main/blocks/Advantages/Advantages.scss';

export const Advantages = () => (
  <article id='advantages' className={styles.advantages}>
    <div className={styles.container}>
      <h4 className={styles.title}>Наші переваги</h4>
      <div className={styles.row}>
        <div className={styles.wrapper}>
          <p className={styles.text}>
            більше <span>20 років</span>
            <br />
            успішного викладання
          </p>
          <p className={styles.addition}>
            / День народження клубу
            <br />7 березня 2003 /
          </p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.mark}>
            <h5>Професійність</h5>
            <p className={styles.text}>Відповідна освіта викладачів та постійне підвищення кваліфікації.</p>
          </div>
          <div className={styles.mark}>
            <h5>Виховання</h5>
            <p className={styles.text}>
              Наша мета – не лише навчити правильно рухатись, а й доторкнутись до виховання багатогранної душі в
              особистості.
            </p>
          </div>
          <div className={styles.mark}>
            <h5>Індивідуальний підхід</h5>
            <p className={styles.text}>Це незмінне правило нашої роботи. Кожна людина важлива для нас!</p>
          </div>
        </div>
      </div>
    </div>
  </article>
);
