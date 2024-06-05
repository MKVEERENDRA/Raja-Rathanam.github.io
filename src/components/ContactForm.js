import React, { useEffect } from "react";

export default function ContactForm() {
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "d0563d5e-c371-40bc-a0fd-1972a7b3eff3",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  useEffect(() => {
    // Add media queries using JavaScript only in the browser
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 768) {
        styles.form.padding = "15px";
        styles.input.fontSize = "15px";
        styles.input.padding = "7px";
        styles.textarea.fontSize = "15px";
        styles.textarea.padding = "7px";
        styles.button.fontSize = "15px";
        styles.button.padding = "10px";
      }

      if (window.innerWidth <= 600) {
        styles.form.padding = "10px";
        styles.button.width = "100%";
        styles.button.fontSize = "14px";
        styles.button.padding = "12px";
      }

      if (window.innerWidth <= 400) {
        styles.form.padding = "8px";
        styles.input.fontSize = "14px";
        styles.input.padding = "6px";
        styles.textarea.fontSize = "14px";
        styles.textarea.padding = "6px";
        styles.button.fontSize = "14px";
        styles.button.padding = "10px";
      }
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label htmlFor="name" style={styles.label}>Name</label>
        <input type="text" name="name" required placeholder="Your name" style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="email" style={styles.label}>Email</label>
        <input type="email" name="email" required placeholder="email@example.com" style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="message" style={styles.label}>Message</label>
        <textarea name="message" required rows="3" placeholder="Enter Message" style={styles.textarea}></textarea>
      </div>
      <button type="submit" style={styles.button}>Submit Form</button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "4px",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
    boxSizing: "border-box",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};
