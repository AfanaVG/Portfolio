import { CSSProperties } from "react";
import icon from "./LikedinIcon.svg";

interface props {
  style?: CSSProperties;
}

function LikedinIcon({ style }: props) {
  return <img src={icon} alt="Likedin" style={style} />;
}

export default LikedinIcon;
