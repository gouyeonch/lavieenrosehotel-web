// src/routes.ts
import GlobalLayout from "./pages/_layout";
import Homepage from "./pages/Homepage/Homepage";
import CheckResvRoom from "./pages/CheckResvRoom/CheckResvRoom"
import CheckResvAmen from "./pages/CheckResvAmen/CheckResvAmen"
import CheckResvTraf from "./pages/CheckResvTraf/CheckResvTraf"
import AdminCheckAmenCat from "./pages/AdminCheckAmenCat/AdminCheckAmenCat"
import AdminCheckRoomCat from "./pages/AdminCheckRoomCat/AdminCheckRoomCat"

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/homepage", element: <Homepage /> },
      { path: "/checkResvRoom", element: <CheckResvRoom /> },
      { path: "/checkResvAmen", element: <CheckResvAmen /> },
      { path: "/checkResvTraf", element: <CheckResvTraf /> },
      { path: "/adminCheckAmenCat", element: <AdminCheckAmenCat /> },
      { path: "/adminCheckRoomCat", element: <AdminCheckRoomCat /> },
    ]
  }
];

export const pages = [
  { route: "/" },
  { route: "/homepage" },
  { route: "/checkResvRoom" },
  { route: "/checkResvAmen" },
  { route: "/checkResvTraf" },
  { route: "/adminCheckAmenCat" },
  { route: "/adminCheckRoomCat" },
]; // 페이지 목록에 새로운 라우트를 추가
