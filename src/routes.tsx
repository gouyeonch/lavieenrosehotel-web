// src/routes.ts
import GlobalLayout from "./pages/_layout";

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
    ],
  },
];

export const pages = [
  { route: "/" },
]; // 페이지 목록에 새로운 라우트를 추가
