import { Link } from 'react-router-dom';
import { Container } from 'components/Container';
import { Button } from 'components/Button';
import phone from 'assets/icons/phone-white.svg';
import logo from 'assets/icons/logo/logo.svg';
import styles from 'components/Header/Header.scss';

export const Header = () => (
  <header className={styles.header}>
    <Container className={styles.row}>
      <Link to='/'>
        <img className={styles.logo} src={logo} alt='logo' />
      </Link>
      <Button className={styles.btn}>
        <img src={phone} alt='phone' className={styles.phone} />
        <span>Зателефонувати</span>
      </Button>
    </Container>
  </header>
);
