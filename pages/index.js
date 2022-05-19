import { useState, useEffect } from "react";
import Seo from "../components/Seo";

const API_KEY = "14148cd3a0084e4f63a132f8501e0ec1";

function HomePage() {
  const [movies, setMovies] = useState([]);

  const fetchMovie = async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      )
    ).json();
    console.log("data::", results);
    setMovies(results);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>
      <Seo title={"Home"} />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((value) => (
        <div key={value.id}>
          <h4>{value.original_title}</h4>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
