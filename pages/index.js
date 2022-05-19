import react, { useState } from "react";
import Head from "next/head";
import Seo from "../components/Seo";

function HomePage() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Seo title={"Home"} />
      <h1 className="active">Hello</h1>
    </div>
  );
}

export default HomePage;
