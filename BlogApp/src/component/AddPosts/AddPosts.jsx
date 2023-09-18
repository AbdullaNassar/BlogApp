import { useState } from "react";
import classes from "./AddPosts.module.css";
function AddPosts({addPost}){
    const[postTitle, setPostTitle]=useState('');
    const[postBody, setPostBody]=useState('');
    function addPostHandler(e){
        e.preventDefault();
        if(!postTitle || !postBody)return ;
        const newpost= {title: postTitle, body: postBody};
        addPost(newpost);
        // setPostTitle('');
        // setPostBody('');
    }

    return(
        <form className={classes.form} onSubmit={addPostHandler} >
            <input value={postTitle} onChange={(e)=>setPostTitle(e.target.value)} 
            type="text" placeholder="Post title" />
            <textarea value={postBody} onChange={(e)=>setPostBody(e.target.value)}
             placeholder="Post body" />
            <button className="btn">Add Post</button>
        </form>
    );
}
export default AddPosts;