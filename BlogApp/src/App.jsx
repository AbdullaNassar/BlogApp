import { useState } from 'react'
import './App.css'
import AddPosts from './component/AddPosts/AddPosts'
import Header from './component/Header/Header'
import Posts from './component/Posts/Posts'
function App() {
  const[posts, setPosts]=useState([]);
  const[searchPosts, setSearchPosts]=useState(posts);
  const[isSearched, setIsSearched]=useState(false);
  // console.log(isSearched);
  // console.log(posts);
  function addPostHandler(newPost){
    setPosts(e=>[...e, newPost]);
  }
  function clearPostsHandler(){
    setPosts([]);
  }
  function changeQueryHandler(query){
    console.log(query);
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
return (
  <div>
    <Header changeQuery={changeQueryHandler} clearPosts={clearPostsHandler} postsLen={isSearched?searchPosts.length:posts.length}/>
    <AddPosts addPost={addPostHandler}/>
    <Posts posts={isSearched?searchPosts:posts}/>
  </div>
  )
}

export default App
