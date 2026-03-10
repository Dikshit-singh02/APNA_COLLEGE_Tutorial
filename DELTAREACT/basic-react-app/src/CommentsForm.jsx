import {useState} from "react";
export default function CommentsForm(){
    let [formData,setFormData]=useState({
        username:"",
        remarks:"",
        rating:"5"
    });

let handleInputChange=(event)=>{
    setFormData((currData)=>{
        return {...currData,[event.target.name]:event.target.value}
    });
};



let handleSubmit=(event)=>{
    console.log(formData);
    event.preventDefault();
    setFormData({
        username:"",
        remarks:"",
        rating:"5"
    });
}

    return (<div>
<form onSubmit={handleSubmit}>
            <h1>Cooment form</h1>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="username" id="username" value={formData.username} onChange={handleInputChange} name="username"/>
            <br /><br /><br />
            <label htmlFor="remark">Remarks</label>
            <textarea id="remark" name="remarks"placeholder="Give here remarks"value={formData.remarks}onChange={handleInputChange}></textarea>
            <br /><br /><br />
            <label htmlFor="rating">Rating</label>
            <input type="number" id="rating" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} name="rating"/>
            <br /><br /><br />
            <button>Add Comment</button>
 </form>
    </div>
        
    )
}