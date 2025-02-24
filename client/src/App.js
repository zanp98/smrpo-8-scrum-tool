import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";
    axios
      .get(apiUrl)
      .then((res) => setMessage(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React App with Docker</h1>
      <p>Server says: {message}</p>
    </div>
  );
}

export default App;
