import posts from "/src/media.json";

export default function Post() {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="post">
            <img src={post.img} alt={`Post ${post.id}`} />
            <p>{post.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
