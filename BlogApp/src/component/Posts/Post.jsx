import classes from "./Post.module.css";
function Post({post}){
    return(
        <div className={classes.post}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
}
export default Post;