import { useContext } from "react";
import { PostContext } from "../PostContext";
function SearchPost(){
    const{changeQuery}=useContext(PostContext);
    
    return(
        <div>
            <input onChange={(e)=>{
                changeQuery(e.target.value);
            }} placeholder="Search posts..."/>
        </div>
    );
}
export default SearchPost;