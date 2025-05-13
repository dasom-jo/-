# 🎞️ Infinite Scroll - Top Rated Movies

무한스크롤을 구현한 React 프로젝트입니다.
The Movie Database(TMDB) API를 사용하여 인기 높은 영화 목록을 페이지 단위로 가져오고,
스크롤이 하단에 도달할 때마다 다음 페이지를 자동으로 요청합니다.

---

## ✅ 기능 소개

- [x] **Infinite Scroll**
  사용자가 스크롤을 내릴 때마다 다음 데이터를 자동으로 불러오는 방식.
  페이징 버튼 없이 자연스럽게 콘텐츠를 계속 노출할 수 있음.
  예시: 인스타그램, 페이스북 피드

- [x] **React Query (`useInfiniteQuery`)**를 이용한 효율적인 페이징 데이터 처리
- [x] **react-intersection-observer**를 이용해 스크롤 감지

---

## 🚀 실행 방법

```bash
# 1. 저장소 클론 및 이동
git clone [레포주소]
cd infinite-scroll

# 2. 패키지 설치
npm install

# 3. 환경 변수 등록
touch .env

---

## 실행 영상
```markdown
![Infinite Scroll Demo](image/virtual_scroll.gif)
```