import { useLocation, Link } from 'react-router-dom';
import cn from 'classnames';
import { routes } from 'constants/routes';
import logo from 'assets/icons/logo.svg';
import styles from 'components/Sidebar/Sidebar.scss';

export const Sidebar = ({ setHeaderTitle }) => {
  const { pathname } = useLocation();

  return (
    <aside className={styles.sidebar}>
      <Link to='/' className={styles.logoLink} onClick={() => setHeaderTitle('')}>
        <img src={logo} alt='Логотип клубу' className={styles.logo} />
      </Link>
      <nav>
        <ul className={styles.navigation}>
          {routes.map(({ id, title, route, icon }) => (
            <li className={styles.navigationItem} key={id}>
              <Link
                to={route}
                className={cn(styles.link, { [styles.active]: pathname === route })}
                onClick={() => setHeaderTitle(title)}
              >
                <span style={{ mask: `url(${icon})` }} className={styles.icon} />
                <div className={styles.tooltip}>{title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
