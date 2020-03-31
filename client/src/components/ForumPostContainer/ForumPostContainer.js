import React from "react";
import "./ForumPostContainer.css";
import ForumPost from "../ForumPost/ForumPost";
import Comment from '../Comment/Comment'

export default function ForumPostContainer(props) {
  return (
    <div className="PostContainer">
      <div>
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
      <div>
        {props.comment ? (
          <Comment
            name={props.comment.name}
            likes={props.comment.likes}
            replies={props.comment.replies}
            image={props.comment.image}
            date={props.comment.date}
            time={props.comment.time}
            body={props.comment.body}
          />
        ) : (
          <Comment />
        )}
      </div>
    </div>
  );
}
