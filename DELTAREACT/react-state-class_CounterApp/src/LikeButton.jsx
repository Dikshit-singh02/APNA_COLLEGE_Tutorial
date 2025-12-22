import { useState } from "react";


export default function LikeButton(){
//<i class="fa-solid fa-heart"></i>

    let[liked,setLiked]=useState(false);
    function handleLike(){
        setLiked(!liked)
        console.log("liked")
    }

    let likeStyle={color:"red"}
   
    return(
        <div>
        <button onClick={handleLike}>
            {liked?(<i class="fa-solid fa-heart"style={likeStyle}></i>
):(<i class="fa-regular fa-heart"></i>)}</button>
        </div>
    )
}