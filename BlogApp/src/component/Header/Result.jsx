import { useContext } from "react";
import { usePosts } from "../PostContext";
function Result(){
    const{postsLen}=usePosts();
    // console.log(postsLen);
    return(
        <div style={{fontWeight:"bold"}}>
            🚀{postsLen} posts found
        </div>
    );
}
export default Result;