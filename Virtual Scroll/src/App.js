
import React, { useEffect, useRef, useState } from 'react';
import useGetTopRateMovies from './hooks/useGetTopRatedMovies';


const ITEM_HEIGHT = 300; //각 항목의 높이
const VISIIBLE_COUNT = 5; //화면에 보일 항목 수

function App() {
 const {data, isLoading, error} = useGetTopRateMovies();
 const containerRef = useRef(null);
 const [scrollTop, setScrollTop] = useState(0);

 const movies = data?.results || [];
 const totalHeight = movies.length * ITEM_HEIGHT;
 const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
 const endIndex = Math.min(startIndex + VISIIBLE_COUNT, movies.length);
 const visibleItems = movies.slice(startIndex, endIndex);
 const offsetY = startIndex * ITEM_HEIGHT;

 const handleScroll = () => {
  if(containerRef.current) {
    setScrollTop(containerRef.current.scrollTop);
  }
 }

 useEffect(()=>{
  const container = containerRef.current;
  if(container){
    container.addEventListener('scroll',handleScroll);
    return() => container.removeEventListener('scroll',handleScroll);
  }
 },[handleScroll]);

 if(isLoading) return <div>로딩중..</div>
 if(error) return <div>에러 발생 : {error.message}</div>


  return (
    <div
      ref={containerRef}
      style={{
      height: ITEM_HEIGHT * VISIIBLE_COUNT,
      overflowY: "auto",
      border: "1px solid black",
      }}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
      <div style={{ position: "absolute", top: offsetY, left: 0, right: 0 }}>
        {visibleItems.map((movie) => (
        <div
          key={movie.id}
          style={{
          height: ITEM_HEIGHT,
          borderBottom: "1px solid gray",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          }}
        >
          <h3 style={{ textAlign: "center" }}>{movie.title}</h3>
          <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ height: "80%", objectFit: "contain" }}
          />
        </div>
        ))}
      </div>
      </div>
    </div>
    );
}
export default App;
