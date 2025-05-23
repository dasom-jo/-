import React, { useState } from "react";
import useGetTopRateMovies from "./hooks/useGetTopRatedMovies";

const MovieList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError, isFetching } = useGetTopRateMovies(currentPage);

  if (isLoading) return <p>로딩중~!</p>;
  if (isError) return <p>에러 발생</p>;
 console.log("isError",isError);
  const movies = data.results;
  const totalPages = data.total_pages;

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ width: "200px" }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", height: "auto" }}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setCurrentPage((p) => p - 1)} disabled={currentPage === 1}>
          ◀ Prev
        </button>
        <span style={{ margin: "0 10px" }}>
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
        >
          Next ▶
        </button>
      </div>

      {isFetching && <p>데이터 불러오는 중...</p>}
    </div>
  );
};

export default MovieList;
