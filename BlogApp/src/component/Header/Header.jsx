import Logo from "./Logo";
import Result from "./Result";
import SearchPost from "./SearchPost";
import classes from "./Header.module.css";
import { usePosts } from "../PostContext";
import { useContext } from "react";
function Header(){
    
    const {clearPosts}=usePosts();
    
    return(
        <div className={classes.header}>
            <Logo/>
            <Result />
            <SearchPost />
            <button onClick={()=>{
                // console.log('here');
                clearPosts();
            }} className="btn">Clear Posts</button>
        </div>
    );
}
export default Header;