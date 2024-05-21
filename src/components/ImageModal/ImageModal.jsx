import { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

export default function ImageModal({ images, currentIndex, onClose }) {
  const [index, setIndex] = useState(currentIndex);

  const moveNext = () => {
    setIndex((index + 1) % images.length);
  };

  const movePrev = () => {
    setIndex((index + images.length - 1) % images.length);
  };

  return (
    <Lightbox
      mainSrc={images[index]}
      nextSrc={images[(index + 1) % images.length]}
      prevSrc={images[(index + images.length - 1) % images.length]}
      onCloseRequest={onClose}
      onMovePrevRequest={movePrev}
      onMoveNextRequest={moveNext}
    />
  );
}
