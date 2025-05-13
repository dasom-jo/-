# 🎞️ TMDB Virtual Scroll App

React + TypeScript로 직접 구현한 **가상 스크롤(Virtual Scroll)** 기능을 활용하여, TMDB API에서 가져온 영화 데이터를 효율적으로 렌더링하는 프로젝트입니다.

---

## ✅ 주요 기능

- [x] TMDB 상위 평점 영화 API 연동 (`useGetTopRateMovies`)
- [x] 가상 스크롤 직접 구현 (`useRef`, `scrollTop`)
- [x] 스크롤 위치에 따라 화면에 보이는 항목만 렌더링
- [x] 성능 최적화를 위한 최소 렌더링

---

## 🛠 사용 기술

- React (useState, useEffect, useRef)
- React Query (`@tanstack/react-query`)
- TMDB API

---

## 🚀 실행 방법

```bash
# 1. 의존성 설치
npm install
