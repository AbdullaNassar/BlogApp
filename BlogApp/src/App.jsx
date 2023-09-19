import React, { createContext, useContext, useState } from 'react'
import './App.css'
import AddPosts from './component/AddPosts/AddPosts'
import Header from './component/Header/Header'
import Posts from './component/Posts/Posts'
import Logo from './component/Header/Logo'
import { PostProvider } from './component/PostContext'


function App() {
  
return (
  
 <PostProvider>
    <Header/>
    
    <AddPosts />
    <Posts />
  </PostProvider>

  )
}

export default App
