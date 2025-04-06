import Posts from "./Posts"
import { useContext } from "react"
import { PostList as PostListData } from "../store/post-list-store"
const PostList = () => {
    const {postList}=useContext(PostListData);
    
    return (<>
        {postList.map((post)=>(<Posts key={post.id} post={post}></Posts>
        ))}
    </>
    )
}

export default PostList;