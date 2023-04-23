import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../store/cartSlice.js";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // Remove from Cart
  const handleRemoveFromCart = (product) => {
    console.log(product);
    return dispatch(removeProduct(product));
  };

  return (
    <>
      <div>
        <h3 className="heading">Cart</h3>
        <div className={"cartWrapper"}>
          {products.map((product) => {
            return (
              <div key={product.id} className={"cartCard"}>
                <img src={product.image} alt={product.title} />
                <h5>{product.title}</h5>
                <h5>{product.price}</h5>
                <button
                  onClick={() => handleRemoveFromCart(product.id)}
                  className="btn"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
