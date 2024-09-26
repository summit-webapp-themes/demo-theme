import styles from '../styles/components/pushNotification.module.scss';
function NotificationPopup({ message, show, onClose }: any) {
  return (
    <div className={`${styles.popup_container} ${show ? styles.show : ''}`}>
      <div className={`${styles.popup_content} p-3 px-5`}>
        <p>{message}</p>
        <div className="d-flex justify-content-between">
          <button onClick={onClose} className={`w-100 mx-2 ${styles.btn} ${styles.block_btn}`}>
            Block
          </button>
          <button onClick={onClose} className={`w-100 mx-2 ${styles.btn} ${styles.allow_btn}`}>
            Allow
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotificationPopup;
