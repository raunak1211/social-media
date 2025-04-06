import { useRef, useContext } from "react";
import style from "./createPost.module.css"
import {PostList} from "../store/post-list-store"

const CreatePost = () => {

  const {addPost} = useContext(PostList);

  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postDiscElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postDisc=postDiscElement.current.value;
    const reactions=reactionsElement.current.value;
    const tags = tagsElement.current.value.split(' ')
    addPost(userId,postTitle,postDisc,reactions,tags)

    userIdElement.current.value="";
    postTitleElement.current.value="";
    postDiscElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";
  }


  return (
    <form className={style.createPost} onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          USER ID
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Please enter your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="Please enter title of your post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Description" className="form-label">
        Description
        </label>
        <textarea
          ref={postDiscElement}
          type="text"
          rows="4"
          className="form-control"
          id="title"
          placeholder="Description Or Content"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Reactions" className="form-label">
          Reaction
        </label>
        <input
          ref={reactionsElement}
          type="number"
          className="form-control"
          id="title"
          placeholder="Please enter Number of reaction's"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your HasTag's Here
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
