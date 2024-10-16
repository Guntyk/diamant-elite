import queryString from 'query-string';
import cn from 'classnames';
import { useLocation, useHistory } from 'react-router-dom';
import { Locations } from 'pages/Website/content/Locations';
import { Team } from 'pages/Website/content/Team';
import styles from 'pages/Website/Website.scss';

export const Website = () => {
  const { search } = useLocation();
  const { push } = useHistory();
  const contentType = queryString.parse(search).content || 'team';

  const websiteContentPages = [
    { id: 1, title: 'Команда', key: 'team', component: <Team /> },
    { id: 2, title: 'Локації', key: 'locations', component: <Locations /> },
    { id: 3, title: 'Відгуки', key: 'testimonials' },
  ];

  return (
    <section className={styles.page}>
      <nav>
        <ul className={styles.navigation}>
          {websiteContentPages.map(({ id, title, key }, index) => (
            <li key={id}>
              <button
                className={cn(styles.link, { [styles.active]: contentType === key })}
                onClick={() => push({ search: `?content=${key}` })}
              >
                <span className={styles.number}>0{index + 1}</span>
                {title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.content}>{websiteContentPages.find(({ key }) => key === contentType)?.component}</div>
    </section>
  );
};
