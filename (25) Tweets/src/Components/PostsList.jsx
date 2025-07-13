import { useContext } from 'react';
import { PostsContext } from '../Contexts/PostsContext.jsx';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const PostsList = () => {

  // Component States
  const { postsArray } = useContext(PostsContext);


  return (
    <div className='posts-list'>
      <Container>
        {postsArray ? postsArray.map((element)=> (
          <Link key={element.id} to={`/posts/postDetails/${element.id}`}>
            <h3>{element.postName}</h3>
          </Link>
        )) : <h2>No Posts Found</h2>}
      </Container>
    </div>
  )
}

export default PostsList;
