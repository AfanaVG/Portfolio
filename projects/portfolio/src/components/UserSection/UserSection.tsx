import { useEffect, useRef } from "react";
import ElementLabel from "../ElementLabel/ElementLabel";
import styles from "./UserSection.module.css";
import userImage from '../../assets/cv-image.jpeg'; 

interface Props {
  handleImageSize: (width: number) => void;
}

function UserSection({ handleImageSize }: Props) {
  // Especifica que la referencia es a un elemento de imagen HTML
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

  const updateSize = () => {
    if (imageRef.current) {
      handleImageSize(imageRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize(); // Actualiza el tamaño inicialmente al montar el componente

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <img
      id="user-img"
      ref={imageRef}
      className={styles["user-img"]}
      src={userImage}
      alt="Girl in a jacket"
    />
  );
}

export default UserSection;
