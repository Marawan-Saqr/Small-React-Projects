import React from 'react';
import './PostCard.css';
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="4" className="my-1">
        <div className="card">
          <div className="card-body">
            <p><strong>Post Name:</strong> {post.title}</p>
            <p><strong>Post Description:</strong> {post.body}</p>
            <Link to={`/post-details/${post.id}`} className='btn btn-warning'>Post Details</Link>
          </div>
        </div>
    </Col>
  );
};




export default PostCard;