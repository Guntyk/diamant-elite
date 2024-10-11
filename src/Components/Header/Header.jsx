import cn from 'classnames';
import { Container } from 'components/Container';
import { Button } from 'components/Button';
import arrow from 'assets/icons/arrows/arrow-down.svg';
import phone from 'assets/icons/phone-white.svg';
import logo from 'assets/icons/logo/logo.svg';
import styles from 'components/Header/Header.scss';

export const Header = () => (
  <header className={styles.header}>
    <Container className={styles.headerRow}>
      <a href='/'>
        <img src={logo} alt='logo' />
      </a>
      <div className={styles.headerContent}>
        <Button className={cn(styles.btn, styles.desktop)}>
          <img src={phone} alt='phone' className={styles.phone} />
          Зателефонувати
          <img src={arrow} alt='down' className={styles.down} />
        </Button>
        <div className={styles.headerCalls}>
          <ul className={styles.headerWrapper}>
            <li>
              <a href='#' className={styles.phone}>
                +380732029988
              </a>
            </li>
            <li>
              <a href='tel:+380505229988' className={styles.phone}>
                +380505229988
              </a>
            </li>
          </ul>
        </div>
        <Button className={styles.mobile}>
          <img src={phone} alt='phone' className={styles.phone} />
        </Button>
      </div>
    </Container>
  </header>
);
