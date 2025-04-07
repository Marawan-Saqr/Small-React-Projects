import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react';
import TopNav from './Components/Topnav/TopNav.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/Post-details/PostDetails.jsx';
import axios from 'axios';


function App() {

  // Component States
  const [posts, setPosts] = useState([]);


  // Get All Products
  const getAllPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(response.data);
  }


  // UseEffect
  useEffect(()=> {
    getAllPosts();
  }, [])


  return (
    <BrowserRouter>
      <div>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts posts={posts} />} />
          <Route path="/post-details/:POSTID" element={<PostDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;