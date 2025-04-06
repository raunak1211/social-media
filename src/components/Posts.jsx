import styles from "./Posts.module.css";
import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Posts = ({ post }) => {

  const {deletePost}=useContext(PostList);

  return (
    <div className={`card ${styles.postCard}`} style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
            <TiDelete></TiDelete>
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.content}</p>
        {post.tags.map((tag) => (
          <span key={tag} className={`badge text-bg-primary ${styles.tag}`}>{tag}</span>
        ))}
        <div className={`alert alert-warning ${styles.reaction}`} role="alert">
          This Post has been reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
};

export default Posts;
