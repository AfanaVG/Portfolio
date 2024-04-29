import { ReactNode } from 'react'
import styles from "./ElementLabel.module.css"

interface props {
  text: string;
  element: ReactNode;
}


function ElementLabel({text, element}:props) {
  return (
   
    <div className={styles.style}>
      <label className={styles.label}>{text}</label>
      <div className={styles.element}>
        {element}
      </div>
    </div>
  )
}

export default ElementLabel
