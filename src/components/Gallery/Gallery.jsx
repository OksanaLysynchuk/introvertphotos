import Post from "../Post/Post.jsx";
import CSS from "./Gallery.module.css";
export default function Gallery() {
  return (
    <div className={CSS.listContainer}>
      <ul className={CSS.list}>
        <Post />
      </ul>
    </div>
  );
}
