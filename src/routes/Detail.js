import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [detailMovie, setDetailMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetailMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  });
  return (
    <>
      <img src={detailMovie.background_image} alt="영화이미지" />
      <p>{detailMovie.title_long}</p>
      <p>{detailMovie.year}</p>
    </>
  );
}

export default Detail;
