import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"; // To dispatch
import { addProduct } from "../store/cartSlice";

const Products = () => {
  const dispatch = useDispatch(); // To get dispatch function
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Add to Cart
  const handleAddtoCart = (product) => {
    console.log(product);
 return    dispatch(addProduct(product));
  };
  return (
    <>
      <div className="productsWrapper">
        {products.map((product) => {
          return (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
              <button
                className="btn"
                onClick={() => {
                  handleAddtoCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
