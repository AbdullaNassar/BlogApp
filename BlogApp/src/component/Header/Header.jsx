import Logo from "./Logo";
import Result from "./Result";
import SearchPost from "./SearchPost";
import classes from "./Header.module.css";
function Header({postsLen, clearPosts, changeQuery}){
    return(
        <div className={classes.header}>
            <Logo/>
            <Result postsLen={postsLen}/>
            <SearchPost changeQuery={changeQuery}/>
            <button onClick={()=>{
                // console.log('here');
                clearPosts();
            }} className="btn">Clear Posts</button>
        </div>
    );
}
export default Header;