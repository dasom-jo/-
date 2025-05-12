import logo from './logo.svg';
import './App.css';
import useGetTopRateMovies from './hooks/useGetTopRatedMovies';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

function App() {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage} = useGetTopRateMovies();
  //loade more가 화면에 보이는순간
  //다시 fetchNextPage를 호출 => react-intersercion-observer 라이브러리
  const {ref, inView} = useInView()
  //inView가 true일때 fetchNextPage를 호출
  useEffect(()=>{
  //console.log("화면에 있습니다.",inView);
  if(inView && hasNextPage && !isFetchingNextPage){
    fetchNextPage();
  }
  },[inView])

    return (
    <div className="App">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && data.pages.map((page) => (
        <div key={page.page}>
          {page.results.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
          ))}
        </div>
      ))}

      <h1 ref={ref}>Load more</h1>

    </div>
  );
}
export default App;
