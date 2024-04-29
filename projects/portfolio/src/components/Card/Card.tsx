import React, { ReactNode } from "react";
import styles from "./Card.module.css";



interface Props {
  title: string;
  time?: string;
  body: ReactNode;
  footer?: ReactNode;
}

const Card = ({ title, time, body, footer }: Props) => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-header"]}>
        <b>{title}</b>
        <label>{time}</label>
      </div>
      <div className={styles["card-body"]}>
        {
          body
        }
      </div>
      <div className={styles["card-footer"]}>
        {footer}
      </div>
    </div>
  );
};

export default Card;
