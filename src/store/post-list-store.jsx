import { createContext,useReducer } from "react";

export const PostList=createContext({postList:[],addPost:()=>{},deletePost:()=>{}});


const postListReducer=(currPostList,action)=>{
    let newPostList=currPostList;
    if(action.type==="DELETE_POST"){
        newPostList=currPostList.filter((posts)=> action.payload.postId !==posts.id)
    }
    else if(action.type==="ADD_POST"){
        newPostList=[action.payLoad,...currPostList]
    }
    return newPostList;
}


const PostListProvider = ({children}) =>{
    const [postList,postlistDispatcher]=useReducer(postListReducer,DEFAULT_POST_LIST);
    const addPost=(userId,postTitle,postDisc,reactions,tags)=>{
        postlistDispatcher({
            type:"ADD_POST",
            payLoad: {
                id:Date.now(),
                title:postTitle,
                content:postDisc,
                reactions:reactions,
                userId:userId,
                tags:tags
            }
        })
    }
    const deletePost=(postId)=>{
        postlistDispatcher({
            type:"DELETE_POST",
            payload:{
                postId
            }
        })
    }
      
    return <PostList.Provider value={{postList,addPost,deletePost}}>
        {children}
    </PostList.Provider>
}

const DEFAULT_POST_LIST = [
    {
        id:'1',
        title:'Go to Home',
        content:'Hey Friends, i am going to mumbai',
        reactions:2,
        userId:'raunak',
        tags:['vacation','home']

    },
    {
        id:'2',
        title:'Go to Play',
        content:'Hey Friends, i am going to play cricket',
        reactions:10,
        userId:'raunak1211',
        tags:['game','playing']

    }
]

export default PostListProvider;