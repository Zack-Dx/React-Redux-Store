import React from "react";
import Products from "../components/Products";
const Home = () => {
  return (
    <>
      <div>
        <h2 className="heading">Welcome to the Redux Toolkit Store</h2>
        <section>
          <h3 className="heading">Products</h3>
          <Products />
        </section>
      </div>
    </>
  );
};

export default Home;
