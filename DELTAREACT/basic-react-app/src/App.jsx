import "./App.css"
import Button from "./Button.jsx";
import Hover from "./Hover.jsx"
import ProductTab from "./ProductTab.jsx"
import Form from "./Form.jsx";
import Lottery from "./Lottery.jsx";
import Ticket from "./Ticket.jsx";

function App() {
  return(
    <>
  <Lottery n={3} winningSum={15}/>
    </>
    
  ) ;
  
}

export default App;
