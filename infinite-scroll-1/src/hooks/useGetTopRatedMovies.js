import { useInfiniteQuery } from "@tanstack/react-query";

const FetchTopRatedMovies = async(page) => {
    const response = await fetch (
        `https://api.themoviedb.org/3/movie/top_rated?page=${page}`,
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
    return useInfiniteQuery({
        queryKey:["top-rated-movie"],
        queryFn:({pageParam})=>{
            return FetchTopRatedMovies(pageParam)
        },
        getNextPageParam:(last)=>{
            if(last.page < last.total_pages){
                return last.page + 1
            }
            return undefined;
        },
        initialPageParam : 1 ,
    })
}

export default useGetTopRateMovies;