import "./Product.css";
//react props
function Product({ title, price, features, features2, addfeatures }) {

    // const list = features?.map((feature) => <li>{feature}</li>);

    return (
        <div className="Product">
            <h1>{title}</h1>
            <h3>This is a Product Description.</h3>
            <h4>Price: {price / 2}</h4>

            <p>{features?.map((feature) => <li>{feature}</li>)}</p>

            <p>{features2?.a}</p>
            <p>{addfeatures?.a}</p>
        </div>
    );
}

export default Product;
