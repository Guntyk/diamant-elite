import cn from 'classnames';
import { useState } from 'react';
import instagram from 'assets/icons/social/instagram_white.svg';
import facebook from 'assets/icons/social/facebook_white.svg';
import styles from 'pages/Main/blocks/Team/Employee/Employee.scss';

export const Employee = ({ employee }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const { name, surname, photo, role, workplace, biography, socials } = employee || {};

  return (
    <div className={cn(styles.card, { [styles.cardFlipped]: isFlipped })}>
      <div className={styles.cardFront} onClick={() => setIsFlipped(!isFlipped)}>
        <div className={styles.photo}>
          <img src={photo} alt={`${name} ${surname}`} loading='lazy' />
        </div>
        <h3 className={styles.name}>
          {name} {surname}
        </h3>
        <p>{role}</p>
        {workplace && <p>{workplace}</p>}
      </div>
      <div className={styles.cardBack}>
        <p className={styles.biography} onClick={() => setIsFlipped(!isFlipped)}>{biography}</p>
        {socials && (
          <div className={styles.socials}>
            {Object.entries(socials).map(([key, value]) => (
              <a target='_blank' className={styles.socialLink} href={value} key={key}>
                <img className={styles.social} src={key === 'facebook' ? facebook : instagram} alt='' />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
