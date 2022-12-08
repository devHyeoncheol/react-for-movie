import { useEffect, useState } from "react";
import Moive from "../component/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <h1>movies</h1>
      {loading ? (
        <span>loading ...</span>
      ) : (
        <div>
          {movies.map((movie) => (
            <Moive
              id={movie.id}
              key={movie.id}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
