# React Lazy Loading Example

이 프로젝트는 `React.lazy()`와 `Suspense`를 사용하여 컴포넌트를 **지연 로딩(Lazy Loading)**하는 예제입니다.
사용자가 특정 버튼을 클릭했을 때만 무거운 컴포넌트를 로딩하여 초기 렌더링 속도를 최적화합니다.

---

## 🧩 주요 기능

- `React.lazy()`를 사용한 동적 import
- `Suspense`를 통한 로딩 상태 처리
- 조건부 렌더링으로 컴포넌트를 필요한 시점에 로딩

---

## 🚀 실행 방법

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm start