import { Sidebar } from 'components/Sidebar';
import styles from 'App.scss';

export default function App() {
  return (
    <>
      <div className={styles.app}>
        <Sidebar />
      </div>

      <div className={styles.warning}>
        <span>😕</span>
        <p>Вибачте, цей пристрій замалий</p>
        <p className={styles.text}>Чутки кажуть, що з комп'ютера тут краще видно 🤔</p>
      </div>
    </>
  );
}
