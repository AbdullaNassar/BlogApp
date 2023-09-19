import { useContext } from "react";
import { usePosts } from "../PostContext";
function SearchPost(){
    const{changeQuery}=usePosts();
    
    return(
        <div>
            <input onChange={(e)=>{
                changeQuery(e.target.value);
            }} placeholder="Search posts..."/>
        </div>
    );
}
export default SearchPost;