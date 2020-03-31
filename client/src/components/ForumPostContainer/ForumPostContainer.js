import React from "react";
// import "../ForumPost/ForumPost.css";
// import "../ForumComment/ForumComment.css";
import "./ForumPostContainer.css";
import ForumPost from "../ForumPost/ForumPost";
import ForumComment from "../ForumComment/ForumComment";

export default function ForumPostContainer(props) {
  return (
    <div className="PostContainer">
      <div className="ForumPost">
        {props.forumPost ? (
          <ForumPost
            pillClick={props.forumPost.pillClick}
            commentClick={props.forumPost.commentClick}
            likeClick={props.forumPost.likeClick}
            to={props.forumPost.to}
            name={props.forumPost.name}
            likes={props.forumPost.likes}
            comments={props.forumPost.comments}
            topics={props.forumPost.topics}
            image={props.forumPost.image}
            post={props.forumPost.post}
          />
        ) : (
          <ForumPost />
        )}
      </div>
      <div className="ForumComment">
        {props.forumComment ? (
          <ForumComment
            name={props.forumComment.name}
            likes={props.forumComment.likes}
            replies={props.forumComment.replies}
            image={props.forumComment.image}
            date={props.forumComment.date}
            time={props.forumComment.time}
            body={props.forumComment.body}
          />
        ) : (
          <ForumComment />
        )}
      </div>
    </div>
  );
}
