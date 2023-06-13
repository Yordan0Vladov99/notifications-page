import "./Comment.css";

function Comment(props) {
  return (
    <div className="Comment">
      <div className="comment-body">
        <img src={props.image} alt="" />
        <div className="comment-details">
          <p>{props.details}</p>
          <span>{props.timeSent} ago</span>
        </div>
        <img src={props.commented_pic} alt="" />
      </div>
      <p>{props.message}</p>
    </div>
  );
}

export default Comment;
