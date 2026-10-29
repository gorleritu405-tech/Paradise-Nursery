import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalQuantity = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalCost = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h1>Shopping Cart</h1>

      <a href="./ProductList">Continue Shopping</a>

      {items.length === 0 ? (
        <div>
          <h2>Your cart is empty!</h2>
          <p>Add some beautiful plants to get started.</p>
          <a href="./ProductList">
            <button>Continue Shopping</button>
          </a>
        </div>
      ) : (
        <>
          <h2>Total Items: {totalQuantity}</h2>

          {items.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "16px",
                borderBottom: "1px solid #ddd",
                padding: "16px 0",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              <div style={{ flex: 1, minWidth: "150px" }}>
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price.toFixed(2)}</p>
                <p>
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <div>
                <button
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

                <span style={{ margin: "0 12px" }}>
                  {item.quantity}
                </span>

                <button
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

                <div style={{ marginTop: "12px" }}>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <h2>Total Cost: ${totalCost.toFixed(2)}</h2>

          <button
            onClick={() =>
              alert("Thank you for shopping with Paradise Nursery!")
            }
            style={{
              padding: "12px 24px",
              backgroundColor: "#2e7d32",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default CartItem;
