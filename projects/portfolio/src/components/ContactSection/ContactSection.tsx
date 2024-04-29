import styles from "./ContactSection.module.css";
import ElementIcon from "../ElementIcon/ElementIcon";
import GitHubIcon from "../../Icons/GitHubIcon/GitHubIcon";
import MailIcon from "../../Icons/MailIcon/MailIcon";
import CVIcon from "../../Icons/CVIcon/CVIcon";
import LikedinIcon from "../../Icons/LinkedinIcon/LikedinIcon";
import CV from "../../assets/CV-Jose-Antonio-Sanchez-Mantero-Rodriguez-Peral.pdf";


interface Props {
  width: number;
  className?: string;
}

function ContactSection({ width, className = "" }: Props) {
  const style = {
    width: width ? `${width}px` : "auto",
  };

  const iconStyle = {
    width: "25px",
    height: "auto",
    fill: "#000000",
  };

  return (
    <section style={style} className={`${styles.container} ${className}`}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/AfanaVG"
      >
        <GitHubIcon style={iconStyle} />
      </a>

      <a
        href="mailto:correo@example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MailIcon style={iconStyle} />
      </a>

      <a href={CV} target="_blank" rel="noopener noreferrer">
        <CVIcon style={iconStyle} />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/jos%C3%A9-antonio-s%C3%A1nchez-mantero-rodr%C3%ADguez-peral-31670120b/"
      >
        <LikedinIcon style={iconStyle}></LikedinIcon>
        
      </a>
    </section>
    
  );
}

export default ContactSection;
