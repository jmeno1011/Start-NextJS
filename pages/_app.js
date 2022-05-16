import NavBar from "../components/Navbar";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
};

export default App;
