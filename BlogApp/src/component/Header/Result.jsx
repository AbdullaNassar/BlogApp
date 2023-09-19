import { useContext } from "react";
import { PostContext } from "../PostContext";
function Result(){
    const{postsLen}=useContext(PostContext);
    // console.log(postsLen);
    return(
        <div style={{fontWeight:"bold"}}>
            🚀{postsLen} posts found
        </div>
    );
}
export default Result;