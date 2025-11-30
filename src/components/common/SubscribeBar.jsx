import React from "react";

const SubscribeBar = () => {
  return (
    <div style={{
      background: "linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 100%)",
      padding: "48px 0 56px 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      minHeight: 220,
    }}>
      {/* Lamp image placeholder */}
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: "40%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {/* Replace with an actual lamp image if available */}
        <span style={{ fontSize: 120, color: "#fff", opacity: 0.2 }}>💡</span>
      </div>
      <div style={{
        marginLeft: "40%",
        width: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 16,
      }}>
        <h2 style={{ color: "#fff", fontWeight: 700, fontSize: 32, margin: 0 }}>
          Get more discount<br />Off your order
        </h2>
        <span style={{ color: "#e0e0e0", fontSize: 16, marginBottom: 8 }}>
          Join our mailing list
        </span>
        <form style={{ display: "flex", gap: 8, width: "100%" }} onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            style={{
              flex: 1,
              padding: "12px 16px",
              borderRadius: 6,
              border: "none",
              fontSize: 16,
              outline: "none",
              minWidth: 220,
            }}
          />
          <button
            type="submit"
            style={{
              background: "#23272f",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "12px 28px",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            Shop Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeBar;
