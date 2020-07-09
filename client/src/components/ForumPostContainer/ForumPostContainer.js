import React from "react";
import "./ForumPostContainer.css";
import ForumPost from "../ForumPost/ForumPost";
import Comment from '../Comment/Comment'


export default function ForumPostContainer(props) {
  const comments = props.forumPost.comments
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
        {!comments ? "" : (
          comments.map((comment, i) => {
            return (
              <Comment
                {...comment}
              />
            );
          })

        )}
      </div>
    </div>
  );
}
