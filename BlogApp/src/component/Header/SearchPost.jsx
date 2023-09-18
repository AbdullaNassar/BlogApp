import { useState } from "react";

function SearchPost({changeQuery}){
    const[query, setQuery]=useState('');
    return(
        <div>
            <input value={query} onChange={(e)=>{
                setQuery(e.target.value)
                changeQuery(e.target.value);
            }} placeholder="Search posts..."/>
        </div>
    );
}
export default SearchPost;