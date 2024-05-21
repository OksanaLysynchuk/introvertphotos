import { useState } from "react";
import posts from "/src/media.json";
import CSS from "./Post.module.css";
import ImageModal from "../ImageModal/ImageModal.jsx";

export default function Post() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className={CSS.postCard}>
      <ul className={CSS.postList}>
        {posts.map((post, index) => (
          <li
            key={post.id}
            className={CSS.listItem}
            onClick={() => openLightbox(index)}
          >
            <img src={post.img} alt={`Post ${post.id}`} className={CSS.img} />
            <p className={CSS.caption}>{post.text}</p>
          </li>
        ))}
      </ul>
      {isOpen && (
        <ImageModal
          images={posts.map((post) => post.img)}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}
