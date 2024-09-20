import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Counter</h1>
      <h2 style={styles.count}>{count}</h2>
      <div style={styles.buttonContainer}>
        <button onClick={() => setCount(count + 1)} style={styles.button}>+</button>
        <button onClick={() => setCount(0)} style={styles.button}>RESET</button>
        {
          count > 0 ? (
            <button onClick={() => setCount(count - 1)} style={styles.button}>-</button>
          ) : (
            <button onClick={() => setCount(count - 1)} style={styles.button} disabled/>
          )
        }
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
  },
  count: {
    fontSize: "3rem",
    color: "#007bff",
    margin: "20px 0",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1.5rem",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default App;
