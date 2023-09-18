import Post from "./Post";
import classes from "./Posts.module.css"
function Posts({posts}){
    return(
        <div className={classes.posts}>
            {posts.map(post=>{
                return <Post post={post}/>
            })}
        </div>
    );
}
export default Posts;