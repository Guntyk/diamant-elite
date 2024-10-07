import styles from "components/Container/Container.scss";

export const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
