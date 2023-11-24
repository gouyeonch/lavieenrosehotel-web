// src/routes.ts
import GlobalLayout from "./pages/_layout";
import Homepage from "./pages/Homepage/Homepage";

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/homepage", element: <Homepage /> }, // 미팅-시작 페이지
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/homepage" },
]; // 페이지 목록에 새로운 라우트를 추가
