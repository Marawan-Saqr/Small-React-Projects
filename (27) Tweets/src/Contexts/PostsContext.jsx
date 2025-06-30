import { createContext, useState } from 'react';
import { data } from '../Data.js';


export const PostsContext = createContext();
const PostsProvider = ({ children }) => {

  // Component States
  const [postsArray] = useState(data);


  return (
    <PostsContext.Provider value={{ postsArray }}>
      {children}
    </PostsContext.Provider>
  );
};


export default PostsProvider;