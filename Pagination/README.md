# 🎬 Top Rated Movies - Pagination

TMDB API를 활용해 상위 평점 영화를 받아오고, React Query를 사용하여 **버튼 기반 페이지네이션**을 구현한 예제입니다.

## 🔍 주요 기능

- TMDB API 연동
- React Query를 사용한 데이터 페칭 및 캐싱
- `useQuery`를 활용한 페이지네이션
- `Prev`, `Next` 버튼을 통한 페이지 이동
- API 에러 및 로딩 상태 처리

## 🛠 사용 기술

- React
- React Query (`@tanstack/react-query`)
- TMDB API (v4 인증 방식)
- JavaScript (ES6+)

## 🖥 실행 방법

1. 레포지토리 클론

```bash
git clone https://github.com/your-id/top-rated-movies-pagination.git
cd top-rated-movies-pagination
```
## 📂 디렉토리 구조
src/
├── hooks/
│   └── useGetTopRateMovies.js  # 페이지별 영화 데이터 요청 로직
├── components/
│   └── MovieList.jsx           # 버튼 기반 페이지네이션 UI
├── App.js
├── index.js
public/
└── index.html

## 구현 내용 요약
- React Query의 useQuery를 사용하여 page 상태 기반 요청

- API 요청 시 Authorization: Bearer ${API_KEY} 헤더 사용

- keepPreviousData 옵션으로 페이지 이동 시 데이터 깜빡임 방지

- 로딩/에러/데이터 페칭 상태를 각각 처리