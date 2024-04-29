import styles from "./PortfolioPage.module.css";
import UserSection from "../components/UserSection/UserSection";
import ContactSection from "../components/ContactSection/ContactSection";
import { useEffect, useRef, useState } from "react";
import Card from "../components/Card/Card";

import CardsData from "../components/Card/CardData";



function PortfolioPage() {
  const [imageWidth, setImageWidth] = useState<number>(0);

  const handleImageSize = (width: number) => {
    setImageWidth(width);
  };

  const buttonBar = document.getElementById("button-section");
  const height = buttonBar?.offsetHeight;

  const style = {
    marginTop: height ? `${height + 10}px` : "auto",
    marginBottom: height ? `${height + 10}px` : "auto",
  };

  const buttonScroll = (id: string) => {
    const anchor = document.querySelector(id);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } =
        scrollContainerRef.current;

      if (scrollTop === 0) {
        scrollContainerRef.current.style.maskImage = "none";
      } else if (scrollTop + clientHeight >= scrollHeight) {
        scrollContainerRef.current.style.maskImage = "none";
      } else {
        scrollContainerRef.current.style.maskImage =
          "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)";
      }
    };

    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles["head-info"]}>
        <UserSection handleImageSize={handleImageSize}></UserSection>
        <ContactSection width={imageWidth}></ContactSection>
      </section>

      <div
        ref={scrollContainerRef}
        style={style}
        className={`${styles["scroll-container"]}`}
      >
        <h2 id="about-me"> Sobre mí</h2>
        {CardsData.aboutMe.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            body={item.body}
          />
        ))}

        <h2 id="experience">Experiencia</h2>
        {CardsData.experience.map((item) => (
          <Card key={item.id} title={item.title} body={item.body} footer={item.footer} />
        ))}

        <h2 id="projects">Proyectos</h2>
        {CardsData.projects.map((item) => (
          <Card key={item.id} title={item.title} body={item.body} />
        ))}
      </div>

      <div>
        <div id="button-section" className={styles["button-bar"]}>
          <button
            className={styles.button}
            onClick={() => buttonScroll("#about-me")}
          >
            Sobre mí
          </button>
          <button
            className={styles.button}
            onClick={() => buttonScroll("#experience")}
          >
            Experiencia
          </button>
          <button
            className={styles.button}
            onClick={() => buttonScroll("#projects")}
          >
            Proyectos
          </button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
