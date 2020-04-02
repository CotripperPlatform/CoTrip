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
        {props.comments ? (
          props.comments.map((comment, i) => {
            return (
              <Comment
                name={comment.name}
                likes={comment.likes}
                replies={comment.replies}
                image={comment.image}
                date={comment.date}
                time={comment.time}
                body={comment.body}
                key={i}
              />
            );
          })
          
        ) : (
          <Comment />
        )}
      </div>
    </div>
  );
}
