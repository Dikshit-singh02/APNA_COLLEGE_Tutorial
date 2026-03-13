import { useState } from "react";

export default function CommentsForm({addNewComment}){

let [formData,setFormData] = useState({
    username:"",
    Remarks:"",
    rating:"5"
});

let handleInputChange=(event)=>{
    setFormData((currData)=>{
        return {...currData,[event.target.name]:event.target.value}
    });
};

let handleSubmit=(event)=>{
    event.preventDefault();
    console.log(formData);

    addNewComment(formData);

    setFormData({
        username:"",
        Remarks:"",
        rating:"5"
    });
}

return(
<div>
<form onSubmit={handleSubmit}>
    <h1>Comment form</h1>

    <label htmlFor="username">Username</label>
    <input
        type="text"
        placeholder="username"
        id="username"
        value={formData.username}
        onChange={handleInputChange}
        name="username"
    />

    <br /><br />

    <label htmlFor="Remarks">Remarks</label>
    <textarea
        id="Remarks"
        name="Remarks"
        placeholder="Give remarks"
        value={formData.Remarks}
        onChange={handleInputChange}
    />

    <br /><br />

    <label htmlFor="rating">Rating</label>
    <input
        type="number"
        id="rating"
        min={1}
        max={5}
        value={formData.rating}
        onChange={handleInputChange}
        name="rating"
    />

    <br /><br />

    <button>Add Comment</button>

</form>
</div>
)
}