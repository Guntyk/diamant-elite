import styles from 'components/ErrorMessage/ErrorMessage.scss';

export const ErrorMessage = ({ errorText }) => <p className={styles.error}>{errorText}</p>;
