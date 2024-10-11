import cn from 'classnames';
import styles from 'components/Button/Button.scss';

export const Button = ({ children, text, className, type, ...props }) => (
  <button className={cn(styles.btn, className)} type={type || 'button'} {...props}>
    {children ?? text}
  </button>
);
