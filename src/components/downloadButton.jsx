import styles from "./downloadButton.module.scss";

const DownloadButton = ({ label, file }) => {
  return (
    <a className={styles.main} href={file} download>
      {label || file}
    </a>
  );
};

export default DownloadButton;
