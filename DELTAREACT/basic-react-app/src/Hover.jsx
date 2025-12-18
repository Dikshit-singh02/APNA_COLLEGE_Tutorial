function hovers(){
    console.log("JustHoverd");
}

function DoubleClicks(event){
    console.log("Double clicked on me");
    console.log(event)
}

export default function Hover(){
    return(
        <div>
            <p onMouseOver={hovers}>please Hover on me </p>

            <button onDoubleClick={DoubleClicks}>Double Click Me!</button>
        </div>
    );
}