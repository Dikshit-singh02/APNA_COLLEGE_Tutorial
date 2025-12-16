import "./Product.css";
import Price from "./Price";
//react props
function Product({ title ,idx}) {
 
    let oldPrice=["12,495","11,900","1,599","599"];
    let newPrice=["8,999","9,199","899","278"];

    let description=[["8000 DPI","5 Programmable Buttons"],["intutive surface","designed for ipad pro"],["designed for ipad pro","intutive surface"],["wireless","optical orientation"]];
    return (
        <div className="Product" >
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
}

export default Product;
