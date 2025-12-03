import Product from "./Product.jsx";

function ProductTab(){
  let options = ["hi-tech", "durable","fast" ];
  let options2 = { a: "hi-tech", b: "durable", c: "fast" };

  return (
    <>
      <Product title="phone" price={20000} features={options} features2={options2} />
      <Product title="laptop" price={30000} addfeatures={{a:"best-one"}} />
      <Product title="Pen" price={20} />
    </>
  );
}

export default ProductTab;
