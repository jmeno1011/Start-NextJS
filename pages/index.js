import { useState, useEffect } from "react";
import Seo from "../components/Seo";

function HomePage() {
  const [movies, setMovies] = useState([]);

  const fetchMovie = async () => {
    const { results } = await (await fetch("/api/movies")).json();
    console.log(results);
    setMovies(results);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="container">
      <Seo title={"Home"} />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((value) => (
        <div className="movie" key={value.id}>
          <img scr={`https://image.tmdb.org/t/p/w500${value.poster_path}`} />
          <h4>{value.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default HomePage;
