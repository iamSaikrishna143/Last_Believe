// import React, { useState } from "react";

// // Recursive Comment Component
// const Comment = ({ comment, addReply }) => {
//   const [replyText, setReplyText] = useState("");
//   const [showReplyBox, setShowReplyBox] = useState(false);

//   const handleReply = () => {
//     if (!replyText.trim()) return;
//     addReply(comment.id, replyText);
//     setReplyText("");
//     setShowReplyBox(false);
//   };

//   return (
//     <div style={styles.commentContainer}>
//       {/* Comment text */}
//       <div style={styles.commentText}>{comment.text}</div>

//       {/* Reply button */}
//       <button style={styles.replyButton} onClick={() => setShowReplyBox(!showReplyBox)}>
//         {showReplyBox ? "Cancel" : "Reply"}
//       </button>

//       {/* Reply input */}
//       {showReplyBox && (
//         <div style={styles.replyBox}>
//           <input
//             type="text"
//             placeholder="Write a reply..."
//             value={replyText}
//             onChange={(e) => setReplyText(e.target.value)}
//             style={styles.input}
//           />
//           <button style={styles.submitButton} onClick={handleReply}>Submit</button>
//         </div>
//       )}

//       {/* Render replies recursively */}
//       <div style={styles.replies}>
//         {comment.replies.map((child) => (
//           <Comment key={child.id} comment={child} addReply={addReply} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const CommentSystem = () => {
//   const [comments, setComments] = useState([
//     {
//       id: 1,
//       text: "This is the first comment",
//       replies: [
//         {
//           id: 2,
//           text: "This is a reply",
//           replies: [
//             { id: 3, text: "Nested reply here!", replies: [] }
//           ]
//         }
//       ]
//     }
//   ]);

//   const [newComment, setNewComment] = useState("");

//   // Add new comment at root level
//   const addComment = () => {
//     if (!newComment.trim()) return;
//     const newObj = {
//       id: Date.now(),
//       text: newComment,
//       replies: []
//     };
//     setComments((prev) => [...prev, newObj]);
//     setNewComment("");
//   };

//   // Recursive function to add reply by ID
//   const addReply = (parentId, text) => {
//     const addReplyRecursive = (comments) =>
//       comments.map((c) => {
//         if (c.id === parentId) {
//           return {
//             ...c,
//             replies: [...c.replies, { id: Date.now(), text, replies: [] }]
//           };
//         }
//         return { ...c, replies: addReplyRecursive(c.replies) };
//       });

//     setComments((prev) => addReplyRecursive(prev));
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Comment System (Recursive)</h2>

//       {/* Add New Root Comment */}
//       <div style={styles.newCommentBox}>
//         <input
//           type="text"
//           placeholder="Add a comment..."
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//           style={styles.input}
//         />
//         <button style={styles.submitButton} onClick={addComment}>Post</button>
//       </div>

//       {/* Render Comments */}
//       <div>
//         {comments.map((comment) => (
//           <Comment key={comment.id} comment={comment} addReply={addReply} />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Basic Styles
// const styles = {
//   container: {
//     maxWidth: "600px",
//     margin: "20px auto",
//     fontFamily: "Arial, sans-serif",
//   },
//   commentContainer: {
//     borderLeft: "2px solid #ddd",
//     marginLeft: "20px",
//     paddingLeft: "10px",
//     marginTop: "10px",
//   },
//   commentText: { marginBottom: "5px", fontSize: "16px" },
//   replyButton: {
//     background: "transparent",
//     border: "none",
//     color: "blue",
//     cursor: "pointer",
//     fontSize: "14px",
//     marginBottom: "5px",
//   },
//   replyBox: { display: "flex", gap: "5px", marginTop: "5px" },
//   newCommentBox: { display: "flex", gap: "5px", marginBottom: "10px" },
//   input: { flex: 1, padding: "5px", fontSize: "14px" },
//   submitButton: {
//     padding: "5px 10px",
//     backgroundColor: "#007BFF",
//     color: "#fff",
//     border: "none",
//     cursor: "pointer",
//   },
//   replies: { marginLeft: "20px" },
// };

// export default CommentSystem;


import React, { useState, useEffect } from "react";

// Recursive Comment Component
const Comment = ({
  comment,
  addReply,
  editComment,
  deleteComment,
  voteComment,
}) => {
  const [replyText, setReplyText] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);
  const [collapsed, setCollapsed] = useState(false);

  const handleReply = () => {
    if (!replyText.trim()) return;
    addReply(comment.id, replyText);
    setReplyText("");
    setShowReplyBox(false);
  };

  const handleEdit = () => {
    if (!editText.trim()) return;
    editComment(comment.id, editText);
    setIsEditing(false);
  };

  return (
    <div style={styles.commentContainer}>
      {/* Comment Text or Edit Mode */}
      <div style={styles.commentHeader}>
        {!isEditing ? (
          <p style={styles.commentText}>{comment.text}</p>
        ) : (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            style={styles.input}
          />
        )}

        {/* Score and Vote buttons */}
        <div style={styles.voteBox}>
          <button onClick={() => voteComment(comment.id, 1)}>▲</button>
          <span>{comment.votes}</span>
          <button onClick={() => voteComment(comment.id, -1)}>▼</button>
        </div>
      </div>

      {/* Actions */}
      <div style={styles.actions}>
        {!isEditing ? (
          <>
            <button onClick={() => setShowReplyBox(!showReplyBox)}>
              {showReplyBox ? "Cancel" : "Reply"}
            </button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteComment(comment.id)}>Delete</button>
          </>
        ) : (
          <button onClick={handleEdit}>Save</button>
        )}

        {/* Collapse replies */}
        {comment.replies.length > 0 && (
          <button onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? "Expand Replies" : "Collapse Replies"}
          </button>
        )}
      </div>

      {/* Reply Box */}
      {showReplyBox && (
        <div style={styles.replyBox}>
          <input
            type="text"
            placeholder="Write a reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleReply}>Submit</button>
        </div>
      )}

      {/* Recursive Replies */}
      {!collapsed && (
        <div style={styles.replies}>
          {comment.replies.map((child) => (
            <Comment
              key={child.id}
              comment={child}
              addReply={addReply}
              editComment={editComment}
              deleteComment={deleteComment}
              voteComment={voteComment}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Main Comment System
const CommentSystem = () => {
  // Load from localStorage
  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem("comments");
    return saved ? JSON.parse(saved) : [];
  });

  const [newComment, setNewComment] = useState("");

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // Add root comment
  const addComment = () => {
    if (!newComment.trim()) return;
    const obj = {
      id: Date.now(),
      text: newComment,
      votes: 0,
      replies: [],
    };
    setComments((prev) => [...prev, obj]);
    setNewComment("");
  };

  // Add reply recursively
  const addReply = (parentId, text) => {
    const recursiveAdd = (list) =>
      list.map((item) =>
        item.id === parentId
          ? {
              ...item,
              replies: [
                ...item.replies,
                { id: Date.now(), text, votes: 0, replies: [] },
              ],
            }
          : { ...item, replies: recursiveAdd(item.replies) }
      );

    setComments((prev) => recursiveAdd(prev));
  };

  // Edit comment
  const editComment = (id, text) => {
    const recursiveEdit = (list) =>
      list.map((item) =>
        item.id === id
          ? { ...item, text }
          : { ...item, replies: recursiveEdit(item.replies) }
      );

    setComments((prev) => recursiveEdit(prev));
  };

  // Delete comment
  const deleteComment = (id) => {
    const recursiveDelete = (list) =>
      list
        .filter((item) => item.id !== id)
        .map((item) => ({
          ...item,
          replies: recursiveDelete(item.replies),
        }));

    setComments((prev) => recursiveDelete(prev));
  };

  // Vote (up/down)
  const voteComment = (id, delta) => {
    const recursiveVote = (list) =>
      list.map((item) =>
        item.id === id
          ? { ...item, votes: item.votes + delta }
          : { ...item, replies: recursiveVote(item.replies) }
      );

    setComments((prev) => recursiveVote(prev));
  };

  return (
    <div style={styles.container}>
      <h2>Advanced Comment System</h2>

      {/* New Comment Input */}
      <div style={styles.newCommentBox}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          style={styles.input}
        />
        <button onClick={addComment}>Post</button>
      </div>

      {/* Render Comments */}
      <div>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            addReply={addReply}
            editComment={editComment}
            deleteComment={deleteComment}
            voteComment={voteComment}
          />
        ))}
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    maxWidth: "600px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  },
  commentContainer: {
    borderLeft: "2px solid #ddd",
    marginLeft: "20px",
    paddingLeft: "10px",
    marginTop: "10px",
  },
  commentHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  commentText: { margin: 0 },
  voteBox: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  actions: { display: "flex", gap: "10px", fontSize: "14px", marginTop: "5px" },
  replyBox: { display: "flex", gap: "5px", marginTop: "5px" },
  replies: { marginLeft: "20px" },
  newCommentBox: { display: "flex", gap: "5px", marginBottom: "10px" },
  input: { flex: 1, padding: "5px", fontSize: "14px" },
};

export default CommentSystem;

