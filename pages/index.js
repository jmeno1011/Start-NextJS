import react, { useState } from "react";

function HomePage() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <h2>Hello {counter}</h2>
      <button onClick={() => setCounter((prev) => prev + 1)}>➕</button>
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  );
}

export default HomePage;
