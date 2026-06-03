import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo_container}>
        <div className={styles.logo}>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.wallpaper_icon}></div>
        </div>           
    </div>
     

  );
}
