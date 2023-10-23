import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get("/api/names");
    setUsername(response.data);
  };

  return (
    <>
      <h1>Hello from my app</h1>
      <h2>{username}</h2>
    </>
  );
}

export default App;
