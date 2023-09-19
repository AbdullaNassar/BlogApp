import { createContext, useContext, useState } from "react";
 const PostContext =createContext();
function PostProvider({children}){

    const[posts, setPosts]=useState([]);
  const[searchPosts, setSearchPosts]=useState(posts);
  const[isSearched, setIsSearched]=useState(false);
  const[postTitle, setPostTitle]=useState('');
  const[postBody, setPostBody]=useState('');
  function addPostHandler(){
    if(!postTitle || !postBody)return ;
        let newpost= {title: postTitle, body: postBody};
        // let x=5;
        setPostTitle('');
        setPostBody('');
    setPosts(e=>[...e, newpost]);
  }
  function clearPostsHandler(){
    setPosts([]);
  }
  function changeQueryHandler(query){
    // console.log(query);
    if(!query){
      setSearchPosts(posts);
      setIsSearched(false);
      return;
    }
    let newArray=posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(query.toLowerCase())
        )
        setSearchPosts(newArray);
        setIsSearched(true);
    // console.log(newArray);
  }
  const contextValue={
    clearPosts:clearPostsHandler,
    postsLen:isSearched?searchPosts.length:posts.length,
    changeQuery:changeQueryHandler,
    posts:isSearched?searchPosts:posts,
    addPost: addPostHandler,
    postTitle,
    postBody,
    setPostBody:changePosttBody,
    setPostTitle: changePostTitle,
  };
  
  function changePostTitle(e){
    setPostTitle(e.target.value);
  }
  function changePosttBody(e){
    setPostBody(e.target.value);
  }
  return <PostContext.Provider value={contextValue}>
    {children}
  </PostContext.Provider>
}
function usePosts(){
    const context =useContext(PostContext);
    if(context===undefined)throw new Error('postContext was used outside of the postProvider')
    return context
}
export {usePosts,PostProvider};

