import { CSSProperties } from "react";
import icon from "./cv.svg";

interface props {
  style?: CSSProperties;
}

function CVIcon({ style }: props) {
  return <img src={icon} alt="CV" style={style} />;
}

export default CVIcon;
