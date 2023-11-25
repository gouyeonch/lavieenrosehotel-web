// src/routes.ts
import GlobalLayout from "./pages/_layout";
import Homepage from "./pages/Homepage/Homepage";
import CheckResvRoom from "./pages/CheckResvRoom/CheckResvRoom"
import CheckResvAmen from "./pages/CheckResvAmen/CheckResvAmen"

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/homepage", element: <Homepage /> },
      { path: "/checkResvRoom", element: <CheckResvRoom /> },
      { path: "/checkResvAmen", element: <CheckResvAmen /> },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/homepage" },
  { route: "/checkResvRoom" },
  { route: "/checkResvAmen" },
]; // 페이지 목록에 새로운 라우트를 추가
