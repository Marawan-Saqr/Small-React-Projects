import "./Post.css";

const Post = ({title, description}) => {
  return (
    <div className="post mb-4">
      <h2>{title}</h2>
      <hr />
      <p>{description}</p>
    </div>
  );
};

export default Post;
