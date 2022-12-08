import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detailMovie, setDetailMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetailMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      {loading ? (
        <span>loading ...</span>
      ) : (
        <>
          <img
            src={detailMovie.background_image}
            alt="영화이미지"
            width={"500px"}
          />
          <span>{detailMovie.title_long}</span>
          <span>{detailMovie.year}</span>
        </>
      )}
    </>
  );
}

export default Detail;
