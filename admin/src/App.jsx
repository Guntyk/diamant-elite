import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { Header } from 'components/Header/Header';
import { Sidebar } from 'components/Sidebar';
import { Website } from 'pages/Website';
import styles from 'App.scss';

export default function App() {
  const [headerTitle, setHeaderTitle] = useState('');

  return (
    <>
      <div className={styles.app}>
        <Sidebar setHeaderTitle={setHeaderTitle} />
        <div className={styles.pages}>
          <Header title={headerTitle} />
          <Switch>
            <Route path='/website'>
              <Website />
            </Route>
          </Switch>
        </div>
      </div>

      <div className={styles.warning}>
        <span>😕</span>
        <p>Вибачте, цей пристрій замалий</p>
        <p className={styles.text}>Чутки кажуть, що з комп'ютера тут краще видно 🤔</p>
      </div>
    </>
  );
}
