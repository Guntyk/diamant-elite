import { useEffect, useRef } from 'react';
import cn from 'classnames';
import styles from 'components/Modal/Modal.scss';

export const Modal = ({ isOpen, setIsOpen }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      <div className={cn(styles.overlay, { [styles.active]: isOpen })}></div>
      <div
        className={cn(styles.modal, { [styles.active]: isOpen })}
        ref={modalRef}
      >
        <div className={styles.close}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
        <div className={styles.numbers}>
          <span className={styles.callUs}>Зателефонуйте нам за номерами:</span>
          <ul>
            <li className={styles.number}>
              <a href='tel:+380732029988'>+380732029988</a>
            </li>
            <li className={styles.number}>
              <a href='tel:+380505229988'>+380505229988</a>
            </li>
          </ul>
        </div>
        <div className={styles.socials}>
          або напишіть нам у{' '}
          <a className={styles.link} href='viber://chat?number=+380732029988'>
            Viber
          </a>{' '}
          чи{' '}
          <a className={styles.link} href='https://t.me/+380732029988'>
            Telegram
          </a>
        </div>
      </div>
    </>
  );
};
