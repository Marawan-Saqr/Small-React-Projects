import { useState } from 'react';

const LikeButton = () => {
  // Component States
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Toggle Like Function
  const toggleLike = () => {
    if (isLiked) {
      setLike(like - 1); // Remove like
    } else {
      setLike(like + 1); // Add like
    }
    setIsLiked(!isLiked); // Toggle the "Liked" state
  };

  return (
    <div>
      <button onClick={toggleLike}>{isLiked ? "Liked" : "Like"}</button>
      <h3>Likes: {like}</h3>
    </div>
  );
};

export default LikeButton;