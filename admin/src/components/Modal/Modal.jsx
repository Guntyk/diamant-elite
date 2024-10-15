import { useEffect, useRef } from 'react';
import cn from 'classnames';
import styles from 'components/Modal/Modal.scss';

export const Modal = ({ isOpen, setIsOpen, children }) => {
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
      <div className={cn(styles.modal, { [styles.active]: isOpen })} ref={modalRef}>
        {children}
      </div>
    </>
  );
};
