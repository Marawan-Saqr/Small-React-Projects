import PostCard from "./Post-card/PostCard.jsx";
import { Row, Container } from "react-bootstrap";

const Products = ({ posts }) => {
  return (
    <Container>
      <Row>
        {posts.length >= 1 ? (
          <>
            <h2 className="text-center mt-3 mb-3">All Posts</h2>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </>
        ) : (
          <h2>No Posts Today</h2>
        )}
      </Row>
    </Container>
  );
};

export default Products;
