import ElementIcon from "../ElementIcon/ElementIcon";
import { FaVuejs, FaReact, FaGithub, FaHtml5 } from "react-icons/fa";
import { SiTypescript, SiJavascript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";

class PortfolioUtils {
  static aboutMe = [
    {
      id: "aboutMe",
      title: "INFORMACIÓN PERSONAL",
      body: "Desarrollador Front-End con 2 años de experiencia. Recientemente especializándome en React y con ganas de aprender nuevas tecnologías como Python.",
    },
  ];

  static experience = [
    {
      id: "indra",
      title: "INDRA",
      body: (
        <p>
          Desarrollo de cliente web para gestionar la contabilidad de una gran
          empresa energética de España.
        </p>
      ),
      footer: (
        <>
          <ElementIcon icon={<FaVuejs />} element={"Vue.js"}></ElementIcon>

          <ElementIcon icon={<FaGithub />} element={"GitHub"}></ElementIcon>
          <ElementIcon icon={<FaHtml5 />} element={"HTML"}></ElementIcon>
          <ElementIcon
            icon={<SiJavascript />}
            element={"JavaScript"}
          ></ElementIcon>
        </>
      ),
    },
    {
      id: "cojali",
      title: "COJALI SYSTEMS SL",
      body: (
        <p>
          Migración de aplicación web para gestionar grandes flotas de vehículos
          (control por gps, avisos de taller, etc...).
        </p>
      ),
      footer: (
        <>
          <ElementIcon icon={<FaReact />} element={"React"}></ElementIcon>
          <ElementIcon icon={<FaGithub />} element={"GitHub"}></ElementIcon>
          <ElementIcon
            icon={<SiTypescript />}
            element={"TypeScript"}
          ></ElementIcon>
          <ElementIcon icon={<FaHtml5 />} element={"HTML"}></ElementIcon>
          <ElementIcon icon={<IoLogoCss3 />} element={"CSS"}></ElementIcon>
          <ElementIcon
            icon={<SiJavascript />}
            element={"JavaScript"}
          ></ElementIcon>
        </>
      ),
    },
  ];

  static projects = [
    {
      id: "youtube-downloader",
      title: "Youtube Downloader",
      body: (
        <p>
          Pequeña aplicación Python para descargar videos de YouTube utilizando
          la librería de{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://pytube.io/en/latest/"
          >
            Pytube
          </a>
          .
        </p>
      ),
    },
  ];
}

export default PortfolioUtils;
