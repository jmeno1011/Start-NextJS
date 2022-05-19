import Layout from "../components/Layout";
import NavBar from "../components/Navbar";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
