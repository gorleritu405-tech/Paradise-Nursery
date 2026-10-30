
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Air Purifying Plants",
    price: 25,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b2a",
    description: "A low-maintenance plant that helps freshen indoor spaces.",
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Air Purifying Plants",
    price: 30,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
    description: "An elegant flowering plant for bright indoor spaces.",
  },
  {
    id: 3,
    name: "Spider Plant",
    category: "Air Purifying Plants",
    price: 22,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
    description: "A cheerful, easy-care plant with arching green leaves.",
  },
  {
    id: 4,
    name: "Aloe Vera",
    category: "Succulents",
    price: 15,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
    description: "A sun-loving succulent that needs very little watering.",
  },
  {
    id: 5,
    name: "Jade Plant",
    category: "Succulents",
    price: 20,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    description: "A compact succulent with thick, glossy leaves.",
  },
  {
    id: 6,
    name: "Echeveria",
    category: "Succulents",
    price: 18,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a",
    description: "A beautiful rosette-shaped succulent for your home.",
  },
  {
    id: 7,
    name: "Monstera",
    category: "Indoor Plants",
    price: 35,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
    description: "A tropical plant known for its large, split leaves.",
  },
  {
    id: 8,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 28,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
    description: "A striking indoor plant with broad, glossy leaves.",
  },
  {
    id: 9,
    name: "Areca Palm",
    category: "Indoor Plants",
    price: 32,
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
    description: "A graceful palm that adds a tropical touch indoors.",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [...new Set(products.map((product) => product.category))];

  const isInCart = (productId) =>
    cartItems.some((item) => item.id === productId);

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <a href="/" style={styles.brand}>Paradise Nursery</a>
        <a href="/CartItem" style={styles.cartLink}>
          🛒 Shopping Cart ({totalQuantity})
        </a>
      </header>

      <section style={styles.intro}>
        <h1>Our Beautiful Plants</h1>
        <p>Bring nature home. Explore our collection and find the perfect plant for your space.</p>
      </section>

      {categories.map((category) => (
        <section key={category} style={styles.category}>
          <h2>{category}</h2>
          <div style={styles.grid}>
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <article key={product.id} style={styles.card}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={styles.image}
                  />
                  <div style={styles.cardContent}>
                    <h3>{product.name}</h3>
                    <p style={styles.description}>{product.description}</p>
                    <p style={styles.price}>${product.price.toFixed(2)}</p>
                    <button
                      type="button"
                      disabled={isInCart(product.id)}
                      onClick={() => dispatch(addItem(product))}
                      style={{
                        ...styles.button,
                        backgroundColor: isInCart(product.id) ? "#888" : "#287a46",
                        cursor: isInCart(product.id) ? "not-allowed" : "pointer",
                      }}
                    >
                      {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "24px 5%",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f8f1",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "15px",
    padding: "18px 24px",
    backgroundColor: "#174d32",
    borderRadius: "10px",
  },
  brand: {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
  },
  cartLink: {
    color: "white",
    fontWeight: "bold",
    textDecoration: "none",
  },
  intro: {
    textAlign: "center",
    padding: "35px 10px",
    color: "#244b32",
  },
  category: {
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "22px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 3px 12px rgba(0,0,0,0.10)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  cardContent: {
    padding: "16px",
  },
  description: {
    minHeight: "40px",
    color: "#555",
    lineHeight: "1.5",
  },
  price: {
    color: "#174d32",
    fontSize: "20px",
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    padding: "12px",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },
};

export default ProductList;

