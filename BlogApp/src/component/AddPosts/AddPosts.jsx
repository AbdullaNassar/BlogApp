import { useContext, useState } from "react";
import classes from "./AddPosts.module.css";
import { usePosts } from "../PostContext";
function AddPosts(){
    
    const{addPost,postTitle,setPostTitle,postBody,setPostBody}= usePosts();
    return(
        <form className={classes.form} onSubmit={(e)=>{
            e.preventDefault();
            addPost();
        }} >
            <input value={postTitle} onChange={setPostTitle} 
            type="text" placeholder="Post title" />
            <textarea value={postBody} onChange={setPostBody}
             placeholder="Post body" />
            <button className="btn">Add Post</button>
        </form>
    );
}
export default AddPosts;