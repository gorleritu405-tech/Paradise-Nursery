
import React from "react";

function AboutUs() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Paradise Nursery</h1>

      <p style={styles.paragraph}>
        Paradise Nursery is an online plant shop dedicated to bringing
        nature closer to people. We offer a wide variety of indoor plants,
        succulents, and air-purifying plants to make homes and workplaces
        greener and healthier.
      </p>

      <h2 style={styles.subheading}>Our Mission</h2>
      <p style={styles.paragraph}>
        Our mission is to make plant shopping simple and accessible while
        encouraging people to create beautiful, green, and peaceful spaces.
      </p>

      <h2 style={styles.subheading}>What We Offer</h2>
      <p style={styles.paragraph}>
        We provide carefully selected plants, convenient online shopping,
        affordable prices, and an easy-to-use shopping cart experience.
      </p>

      <h2 style={styles.subheading}>Why Choose Us?</h2>
      <p style={styles.paragraph}>
        At Paradise Nursery, we believe every plant adds life to a space.
        We aim to help plant lovers discover the perfect greenery for
        their homes and offices.
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.8",
    color: "#294b35",
    backgroundColor: "#f5f8f1",
    borderRadius: "12px",
  },
  heading: {
    textAlign: "center",
    color: "#174d32",
  },
  subheading: {
    color: "#287a46",
    marginTop: "25px",
  },
  paragraph: {
    fontSize: "16px",
    color: "#444",
  },
};

export default AboutUs;
