import React from "react";
import { useState } from 'react';


export function Post(props) {

  let [likeCount , setLikeCount] = useState(0);
  let [dislikeCount, setDislikeCount] = useState(0);

  const url = 'young-river-54362.herokuapp.com/api'

  function likePost(){
    if (dislikeCount) {
      setDislikeCount(dislikeCount -= 1);
    }
    setLikeCount(likeCount += 1);

    // trying to figure out how to update the likeCount
    fetch(`${url}/like`)
    .then(res => res.json)
    .then(data => console.log(data))

  };

  function dislikePost() {
    if (likeCount){
      setLikeCount(likeCount -=1 );
    }
    setDislikeCount(dislikeCount += 1);
  };

  return (
    <div className="post">
      <span className="post-author">{props.author}</span>
      <span className="post-content">{props.content}</span>
      
      <a href="#" onClick={() => {likePost()}}>
        {likeCount ? <i className="fas fa-thumbs-up" /> : <i className="far fa-thumbs-up" />}
      </a>

      <a href="#" onClick={() => { dislikePost() }}>
        {dislikeCount ? <i className="fas fa-thumbs-down" /> : <i className="far fa-thumbs-down" />}

      </a>
    </div>
  );
}

{/* This is a sample icon.  Change "far" to "fas" to get a filled in thumb, and "up" to "down" to get a down thumb https://fontawesome.com/icons/thumbs-up?style=regular */}

/* 


when user clicks like button, send an api call to post to update the likeCount +1, change icon to be filled in thumb.

when user clicks dislike button, send an api call to post to update the dislikeCount +1, change icon to be filled in thumb.



*/