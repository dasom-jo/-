import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const FetchTopRatedMovies = async(page) => {
    const response = await fetch (
        `https://api.themoviedb.org/3/movie/top_rated?page=${page=1}`,
        {
            headers : {
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                accept: 'application/json',
            },
        }
    );
    return response.json();
}

const useGetTopRateMovies = () => {
    return useQuery({
        queryKey: ['topRatedMovies'],
        queryFn : FetchTopRatedMovies,
        staleTime: 1000*60*2,
    })
}

export default useGetTopRateMovies;