import { CSSProperties } from "react";
import icon from "./github.svg";

interface props {
  style?: CSSProperties;
}

function GitHubIcon({ style }:props) {
  return (
    <img src={icon} alt="GitHub" style={style} />
  )
}

export default GitHubIcon;
