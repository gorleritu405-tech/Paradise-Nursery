import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Air Purifying Plants",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2b2a",
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Air Purifying Plants",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 3,
    name: "Aloe Vera",
    category: "Succulents",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 4,
    name: "Jade Plant",
    category: "Succulents",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 5,
    name: "Monstera",
    category: "Indoor Plants",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 6,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <h1>Paradise Nursery Plants</h1>
        <a href="./CartItem">
          Shopping Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
        </a>
      </header>

      <p>Discover plants to brighten your home and garden.</p>

      {categories.map((category) => (
        <section key={category} style={{ marginBottom: "32px" }}>
          <h2>{category}</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <article
                  key={product.id}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    padding: "16px",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "190px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />

                  <h3>{product.name}</h3>
                  <p>Price: ${product.price.toFixed(2)}</p>

                  <button
                    onClick={() => dispatch(addItem(product))}
                    style={{
                      padding: "10px 16px",
                      backgroundColor: "#2e7d32",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Add to Cart
                  </button>
                </article>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
