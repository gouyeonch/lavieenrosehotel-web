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
import TrafficPay from "./pages/TrafficPay/TrafficPay";
import ResvRoomPay from "./pages/ResvRoomPay/ResvRoomPay";
import WalfarePay from "./pages/WalfarePay/WalfarePay";
import Login from "./pages/UserLogin/UserLogin";
import SignupNormal from "./pages/Signup/SignupNormal";
import AdminResvRoom from "./pages/AdminResvRoom/AdminResvRoom";
import AdminManageRoom from "./pages/AdminManageRoom/AdminManageRoom";
import AdminAddRoom from "./pages/AdminAddRoom/AdminAddRoom";
import AdminRoomCatAdd from "./pages/AdminRoomCatAdd/AdminRoomCatAdd";
import AdminRoomCatDetail from "./pages/AdminRoomCatDetail/AdminRoomCatDetail";
import AdminRoomCatUpdate from "./pages/AdminRoomCatUpdate/AdminRoomCatUpdate";
import AdminAmenCatAdd from "./pages/AdminAmenCatAdd/AdminAmenCatAdd";
import AdminAmenCatDetail from "./pages/AdminAmenCatDetail/AdminAmenCatDetail";
import AdminAmenCatUpdate from "./pages/AdminAmenCatUpdate/AdminAmenCatUpdate";
import AdminModifyRoom from "./pages/AdminModifyRoom/AdminModifyRoom";

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
      { path: "/payRoom", element: <ResvRoomPay /> },
      { path: "/payTraf", element: <TrafficPay /> },
      { path: "/payAmen", element: <WalfarePay /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignupNormal /> },
      { path: "/adminResvRoom", element: <AdminResvRoom /> },
      { path: "/adminManageRoom", element: <AdminManageRoom /> },
      { path: "/adminAddRoom", element: <AdminAddRoom /> },
      { path: "/adminRoomCatAdd", element: <AdminRoomCatAdd /> },
      { path: "/adminRoomCatDetail", element: <AdminRoomCatDetail /> },
      { path: "/adminRoomCatUpdate", element: <AdminRoomCatUpdate /> },
      { path: "/adminAmenCatAdd", element: <AdminAmenCatAdd /> },
      { path: "/adminAmenCatDetail", element: <AdminAmenCatDetail /> },
      { path: "/adminAmenCatUpdate", element: <AdminAmenCatUpdate /> },
      { path: "/adminModifyRoom", element: <AdminModifyRoom /> },
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
  { route: "/payRoom" },
  { route: "/payTraf" },
  { route: "/payAmen" },
  { route: "/login" },
  { route: "/signup" },
  { route: "/adminResvRoom" },
  { route: "/adminManageRoom" },
  { route: "/adminAddRoom" },
  { route: "/adminRoomCatAdd" },
  { route: "/adminRoomCatDetail" },
  { route: "/adminRoomCatUpdate" },
  { route: "/adminAmenCatAdd" },
  { route: "/adminAmenCatDetail" },
  { route: "/adminAmenCatUpdate" },
  { route: "/adminModifyRoom" },
]; // 페이지 목록에 새로운 라우트를 추가
