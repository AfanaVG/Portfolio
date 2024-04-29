import { useEffect, useRef } from "react";
import styles from "./UserSection.module.css";
import userImage from "../../assets/cv-image.jpeg";
import ContactSection from "../ContactSection/ContactSection";

interface Props {
  handleImageSize: (width: number) => void;
}

function UserSection({ handleImageSize }: Props) {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleLoad = () => {
      if (imageRef.current) {
        handleImageSize(imageRef.current.offsetWidth);
      }
    };

    const imgEl = imageRef.current;
    if (imgEl) {
      imgEl.addEventListener("load", handleLoad);
    }

    return () => {
      if (imgEl) {
        imgEl.removeEventListener("load", handleLoad);
      }
    };
  }, [handleImageSize]);

  useEffect(() => {
    const updateSize = () => {
      if (imageRef.current) {
        handleImageSize(imageRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <div className={styles.container}>
    <img
      id="user-img"
      ref={imageRef}
      className={styles["user-img"]}
      src={userImage}
      alt="Mi photo"
    />
    <ContactSection></ContactSection>
    </div>
  );
}

export default UserSection;
