function Comment(props) {
  return (
    // <>
    //   <div className="comment">
    //     <div className="user-info">
    //       <img src="" alt="" />
    //       <div className="user-info-name">
    //         {props.author.name}
    //       </div>
    //     </div>
    //     <div className="comment-text">
    //       {props.text}
    //     </div>
    //     <div className="comment-date">
    //       {props.date}
    //     </div>
    //   </div>
    // </>

    <div className="comment">
      <Userinfo user={props.author} />
      <div className="comment-text">
        {props.text}
      </div>
      <div className="comment-date">
        {props.date}
      </div>
    </div>
  );
}

export default Comment;