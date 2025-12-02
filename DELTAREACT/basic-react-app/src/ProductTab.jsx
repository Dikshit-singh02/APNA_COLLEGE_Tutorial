import Product from "./Product.jsx"
function ProductTab(){
    return(
        <>
      <Product title="phone" price={20000}/>
       <Product title="laptop" price={30000}/>
        <Product title="Pen"price={20}/>
  </>
    );
}
 export default ProductTab;