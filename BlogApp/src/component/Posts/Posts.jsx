import { useContext } from "react";
import Post from "./Post";
import classes from "./Posts.module.css"
import { usePosts } from "../PostContext";
function Posts(){
    // console.log('from posts')
    const {posts}=usePosts();
    // console.log(posts);
    return(
        <div className={classes.posts}>
            {posts.map(post=>{
                return <Post key={Math.random()} post={post}/>
            })}
        </div>
    );
}
export default Posts;