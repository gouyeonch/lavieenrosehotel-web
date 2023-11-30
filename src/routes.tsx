// src/routes.ts
import GlobalLayout from "./pages/_layout";
import Homepage from "./pages/Homepage/Homepage";
import CheckResvRoom from "./pages/CheckResvRoom/CheckResvRoom"
import CheckResvAmen from "./pages/CheckResvAmen/CheckResvAmen"
import CheckResvTraf from "./pages/CheckResvTraf/CheckResvTraf"
import AdminCheckAmenCat from "./pages/AdminCheckAmenCat/AdminCheckAmenCat"
import AdminCheckRoomCat from "./pages/AdminCheckRoomCat/AdminCheckRoomCat"
import AdminCheckResvRoom from "./pages/AdminCheckResvRoom/AdminCheckResvRoom";
import ResvRoom from "./pages/ResvRoom/ResvRoom";
import ResvAmen from "./pages/ResvAmen/ResvAmen";
import ResvTraf from "./pages/ResvTraf/ResvTraf";
import AdminAddRoomCat from "./pages/AdminAddRoomCat/AdminAddRoomCat";
import TrafficPay from "./pages/TrafficPay/TrafficPay";
import ResvRoomPay from "./pages/ResvRoomPay/ResvRoomPay";
import WalfarePay from "./pages/WalfarePay/WalfarePay";

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
      { path: "/adminCheckResvRoom", element: <AdminCheckResvRoom /> },
      { path: "/resvRoom", element: <ResvRoom /> },
      { path: "/resvAmen", element: <ResvAmen /> },
      { path: "/resvTraf", element: <ResvTraf /> },
      { path: "/adminAddRoomCat", element: <AdminAddRoomCat /> },
      { path: "/payRoom", element: <ResvRoomPay /> },
      { path: "/payTraf", element: <TrafficPay /> },
      { path: "/payAmen", element: <WalfarePay /> },
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
  { route: "/adminCheckResvRoom" },
  { route: "/resvRoom" },
  { route: "/resvAmen" },
  { route: "/resvTraf" },
  { route: "/adminAddRoomCat" },
  { route: "/payRoom" },
  { route: "/payTraf" },
  { route: "/payAmen" },
]; // 페이지 목록에 새로운 라우트를 추가
