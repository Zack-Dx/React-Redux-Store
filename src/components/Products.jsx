import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // To dispatch
import { addProduct } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch(); // To get dispatch function
  const { data: products, status } = useSelector((state) => state.product); // To get products

  useEffect(() => {
    dispatch(fetchProducts());

    // const fetchProducts = async () => {
    //   const response = await fetch(`https://fakestoreapi.com/products`);
    //   const data = await response.json();
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  // Add to Cart
  const handleAddtoCart = (product) => {
    console.log(product);
    return dispatch(addProduct(product));
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
