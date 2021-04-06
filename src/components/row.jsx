import styles from "./row.module.scss";

const Row = ({ children, center = false }) => {
  return (
    <div className={`${styles.main} ${center ? styles.center : ""}`}>
      {children}
    </div>
  );
};

export default Row;
