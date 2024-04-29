import { ReactNode } from "react";
import styles from "./ElementIcon.module.css";

interface props {
  icon: ReactNode;
  element?: ReactNode;
}

function ElementIcon({ icon, element }: props) {
  return (
    <div className={styles.style}>
      {icon}
      <div className={styles.element}>{element}</div>
    </div>
  );
}

export default ElementIcon;
