import react, { useState } from "react";
import NavBar from "../components/Navbar";

function HomePage() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <h2>Hello {counter}</h2>
      <button onClick={() => setCounter((prev) => prev + 1)}>➕</button>
      <NavBar />
    </div>
  );
}

export default HomePage;
