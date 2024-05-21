import posts from "/src/media.json";
import CSS from "./Post.module.css";

export default function Post() {
  return (
    <div className={CSS.postCard}>
      {posts.map((post) => (
        <li key={post.id} className={CSS.post}>
          <img src={post.img} alt={`Post ${post.id}`} className={CSS.img} />
          <p className={CSS.text}>{post.text}</p>
        </li>
      ))}
    </div>
  );
}
