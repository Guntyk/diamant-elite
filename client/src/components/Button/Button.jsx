import cn from 'classnames';
import { useState } from 'react';
import { Modal } from 'components/Modal';
import styles from 'components/Button/Button.scss';

export const Button = ({
  children,
  text,
  className,
  type,
  phoneBtn,
  ...props
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className={cn(styles.btn, className)}
        type={type || 'button'}
        {...(phoneBtn && { onClick: () => setIsModalOpen(true) })}
        {...props}
      >
        {children ?? text}
      </button>
      {phoneBtn && <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
    </>
  );
};
