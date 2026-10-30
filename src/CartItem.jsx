
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalQuantity = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <a href="/" style={styles.brand}>Paradise Nursery</a>
        <a href="/ProductList" style={styles.link}>Continue Shopping</a>
      </header>

      <h1 style={styles.heading}>Your Shopping Cart</h1>

      {items.length === 0 ? (
        <section style={styles.empty}>
          <h2>Your cart is empty!</h2>
          <p>Discover beautiful plants and bring some greenery home.</p>
          <a href="/ProductList" style={styles.shopButton}>
            Continue Shopping
          </a>
        </section>
      ) : (
        <>
          <p style={styles.count}>Total Items: {totalQuantity}</p>

          <section>
            {items.map((item) => (
              <article key={item.id} style={styles.item}>
                <img src={item.image} alt={item.name} style={styles.image} />

                <div style={styles.details}>
                  <h2>{item.name}</h2>
                  <p>Unit Price: ${item.price.toFixed(2)}</p>
                  <p>
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <div style={styles.controls}>
                  <div style={styles.quantity}>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity - 1,
                          })
                        )
                      }
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    style={styles.remove}
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </section>

          <section style={styles.summary}>
            <h2>Order Summary</h2>
            <p>Total Plants: {totalQuantity}</p>
            <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
            <button
              type="button"
              style={styles.checkout}
              onClick={() =>
                window.alert("Thank you for shopping with Paradise Nursery!")
              }
            >
              Checkout
            </button>
            <a href="/ProductList" style={styles.continue}>
              Continue Shopping
            </a>
          </section>
        </>
      )}
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
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
  heading: {
    color: "#244b32",
    marginTop: "35px",
  },
  count: {
    fontWeight: "bold",
  },
  empty: {
    textAlign: "center",
    padding: "60px 20px",
    backgroundColor: "white",
    borderRadius: "12px",
  },
  shopButton: {
    display: "inline-block",
    padding: "12px 20px",
    backgroundColor: "#287a46",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
  },
  item: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
    padding: "20px",
    marginBottom: "15px",
    backgroundColor: "white",
    borderRadius: "10px",
  },
  image: {
    width: "130px",
    height: "130px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  details: {
    flex: 1,
    minWidth: "170px",
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    alignItems: "center",
  },
  quantity: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  remove: {
    padding: "8px 14px",
    color: "white",
    backgroundColor: "#b33a3a",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  summary: {
    maxWidth: "400px",
    marginLeft: "auto",
    marginTop: "30px",
    padding: "24px",
    backgroundColor: "white",
    borderRadius: "10px",
  },
  checkout: {
    width: "100%",
    padding: "13px",
    color: "white",
    backgroundColor: "#287a46",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  continue: {
    display: "block",
    marginTop: "15px",
    textAlign: "center",
    color: "#287a46",
  },
};

export default CartItem;

