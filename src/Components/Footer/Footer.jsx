import { Link } from 'react-router-dom';
import { Container } from 'components/Container';
import logo from 'assets/icons/logo/logo-bw.svg';
import styles from 'components/Footer/Footer.scss';

export const Footer = () => (
  <>
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <nav>
            <ul className={styles.menu}>
              <li className={styles.item}>
                <a href='/'>Головна</a>
              </li>
              <li className={styles.item}>
                <a href='#advantages'>Переваги</a>
              </li>
              <li className={styles.item}>
                <a href='#selector'>Танцюристам та батькам</a>
              </li>
              <li className={styles.item}>
                <a href='#selector'>Організаторам заходів</a>
              </li>
              <li className={styles.item}>
                <a href='#selector'>Тренерам та хореографам</a>
              </li>
              <li className={styles.item}>
                <a href='#staff'>Команда</a>
              </li>
              <li className={styles.item}>
                <a href='#location'>ЛокаціЇ</a>
              </li>
              <li className={styles.item}>
                <a href='#feedback'>Відгуки</a>
              </li>
            </ul>
          </nav>
          <Link className={styles.logo} to='/'>
            <img src={logo} alt='Diamant Elite logo' />
          </Link>
        </div>
      </Container>
    </footer>
    <aside className={styles.aside}>
      <Container className={styles.container}>
        <div className={styles.asideWrapper}>
          <span>© {new Date().getFullYear()} Diamant-Elite</span>
          <a href='https://bento.me/sate' target='_blank' rel='noreferrer'>
            By Sate
          </a>
        </div>
      </Container>
    </aside>
  </>
);
