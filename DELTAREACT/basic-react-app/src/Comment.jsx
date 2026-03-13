import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment(){

let [comments,setComments] = useState([
{
    username:"@dsr",
    Remarks:"Nice Person!",
    rating:5
}
]);

let addNewComment = (comment)=>{
    setComments((currComments)=>[...currComments,comment]);
    console.log("added new comment");
}

return(
<div>
    <h1>All Comments</h1>

    {comments.map((comment,idx)=>(
        <div className="comment" key={idx}>
            <h2>{comment.Remarks}</h2>
            <h3>Rating: {comment.rating}</h3>
            <h4>{comment.username}</h4>
        </div>
    ))}

    <hr />
    <hr />

    <CommentsForm addNewComment={addNewComment}/>
</div>
)
}