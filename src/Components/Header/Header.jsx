import Logo from "assets/icons/diamant-elite.svg";
import styles from "Components/Header/Header.scss";
import { Container } from "Components/Container";

export const Header = () => {
  return (
    <header className={styles.Header}>
      <Container />
      <div className={styles.headerRow}>
        <a href='/'>
          <Logo />
        </a>
        <div className={styles.headerContent}>
          <button className={styles.buttonDesktop}>
            <img
              src='icons/phone_white.svg'
              alt='phone'
              className={styles.phone}
            />
            Зателефонувати
            <img
              src='icons/arrows/arrow_down.svg'
              alt='down'
              className={styles.down}
            />
          </button>
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
          <button
            data-fancybox
            data-src='#dialog-content'
            className={styles.mobile}
          >
            <img
              src='icons/phone_white.svg'
              alt='phone'
              className={styles.phone}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
