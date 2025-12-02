import "./Product.css"
function Product({title,price}){
   
    return(
        <div className="Product">
            <h1>{title}</h1>
            <h3>This is a Product Description.</h3>
            <h4>Price:{price/2}</h4>
        </div>
    )
}

export default Product;