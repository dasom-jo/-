import { useQuery } from "@tanstack/react-query";

const FetchTopRatedMovies = async (page) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        accept: "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("데이터 불러오기 실패");
  }
  return response.json();
};

const useGetTopRateMovies = (page) => {
  return useQuery({
    queryKey: ["top-rated-movie", page],
    queryFn: () => FetchTopRatedMovies(page),
    keepPreviousData: true, // 페이지 전환 시 이전 데이터 잠깐 유지
    staleTime: 1000 * 60 * 10, // 1분 동안은 fresh 상태
  });
};

export default useGetTopRateMovies;
