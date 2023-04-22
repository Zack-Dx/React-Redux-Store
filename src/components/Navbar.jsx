import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const items = useSelector((state) => {
    return state.cart;
  }); // Return property to subscribe for changes inside that! Now we can use this everywhere in our application just by subscribing and using useSelector Hook
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="logo">Redux Store</span>
        <div>
          <Link className="navLink" to={"/"}>
            Home
          </Link>
          <Link className="navLink" to={"/cart"}>
            Cart
          </Link>
          <span className="cartCount">Cart items: {items.length}</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
