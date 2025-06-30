import PostsProvider from "./Contexts/PostsContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./Components/TopNav.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import PostsList from "./Components/PostsList.jsx";
import PostDetails from './Components/PostDetails.jsx';
import NewPost from './Components/NewPost.jsx';
import DeletePost from './Components/DeletePost.jsx';
import NotFound from "./Components/NotFound.jsx";


function App() {
  return (
    <PostsProvider>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Posts Routes */}
          <Route path="/posts">
            <Route index element={<PostsList />} />
            <Route path="postDetails/:postID" element={<PostDetails />} />
            <Route path="new-post" element={<NewPost />} />
            <Route path="delete-post" element={<DeletePost />} />
          </Route>
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </PostsProvider>
  );
}


export default App;