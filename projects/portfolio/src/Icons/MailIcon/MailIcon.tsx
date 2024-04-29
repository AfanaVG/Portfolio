import { CSSProperties } from "react";
import icon from "./mail.svg";

interface props {
  style?: CSSProperties;
}

function MailIcon({ style }: props) {
  return <img src={icon} alt="Mail" style={style} />;
}

export default MailIcon;
