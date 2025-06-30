import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "../Contexts/PostsContext.jsx";
import { Container } from 'react-bootstrap';


const PostDetails = () => {

  // Component States
  const { postsArray } = useContext(PostsContext);
  const { postID } = useParams();
  const getPostWithID = postsArray.find((element) => {
    return element.id == postID;
  });


  return (
    <div className="post-details">
      <Container>
        {getPostWithID ? (
          <div>
            <h2>{getPostWithID.postName}</h2>
            <p>{getPostWithID.postDescription}</p>
          </div>
        ) : (
          <h2>Not Found</h2>
        )}
      </Container>
    </div>
  );
};


export default PostDetails;