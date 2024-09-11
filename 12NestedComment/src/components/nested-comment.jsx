import React, { useState } from "react";
import "./styles.css";
import useCommentTree from "../hooks/use-comment-tree";
import Comment from "./Comment.jsx";
const NestedComments = ({
  comments,
  onSubmit = () => {},
  onDelete = () => {},
  onEdit = () => {},
}) => {
  const [comment, setComments] = useState("");

  const { comments: commentsData ,insertComment } = useCommentTree(comments);

  const handleChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = () => {
    if (comments) {
      handleReply(undefined,comment )
      setComments("");
    }
  };

  const handleReply = (commentId, content) => {
    insertComment(commentId, content);
  };
  return (
    <>
      <div className="add-comment">
        <textarea
          value={comment}
          rows={3}
          cols={30}
          placeholder="Add a new comment..."
          onChange={handleChange}
          className="comment-textarea"
        />

        <button className="comment-button" onClick={handleSubmit}>
          Add Comment
        </button>
      </div>

      {commentsData.map((comment) => {
        //nested comments rendered here
        return (
          <Comment
            key={comment.id}
            comment={comment}
            onSubmitComment={handleReply}
          />
        );
      })}
    </>
  );
};

export default NestedComments;
