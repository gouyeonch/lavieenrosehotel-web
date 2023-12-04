// src/routes.ts
import GlobalLayout from "./pages/_layout";
import Homepage from "./pages/Homepage/Homepage";
import CheckResvRoom from "./pages/CheckResvRoom/CheckResvRoom"
import CheckResvRoomDetail from "./pages/CheckResvRoomDetail/CheckResvRoomDetail"
import CheckResvAmen from "./pages/CheckResvAmen/CheckResvAmen"
import CheckResvTraf from "./pages/CheckResvTraf/CheckResvTraf"
import AdminCheckAmenCat from "./pages/AdminCheckAmenCat/AdminCheckAmenCat"
import AdminCheckRoomCat from "./pages/AdminCheckRoomCat/AdminCheckRoomCat"
import AdminCheckResvRoom from "./pages/AdminCheckResvRoom/AdminCheckResvRoom";
import AdminCheckResvRoomDetail from "./pages/AdminCheckResvRoomDetail/AdminCheckResvRoomDetail";
import ResvRoom from "./pages/ResvRoom/ResvRoom";
import ResvAmen from "./pages/ResvAmen/ResvAmen";
import ResvTraf from "./pages/ResvTraf/ResvTraf";
import TrafficPay from "./pages/TrafficPay/TrafficPay";
import ResvRoomPay from "./pages/ResvRoomPay/ResvRoomPay";
import WalfarePay from "./pages/WalfarePay/WalfarePay";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import SignUpSocial from "./pages/SignUp/SignUpSocial";
import AdminResvRoom from "./pages/AdminResvRoom/AdminResvRoom";
import AdminManageRoom from "./pages/AdminManageRoom/AdminManageRoom";
import AdminAddRoom from "./pages/AdminAddRoom/AdminAddRoom";
import AdminRoomCatAdd from "./pages/AdminRoomCatAdd/AdminRoomCatAdd";
import AdminRoomCatUpdate from "./pages/AdminRoomCatUpdate/AdminRoomCatUpdate";
import AdminAmenCatAdd from "./pages/AdminAmenCatAdd/AdminAmenCatAdd";
import AdminAmenCatUpdate from "./pages/AdminAmenCatUpdate/AdminAmenCatUpdate";
import AdminModifyRoom from "./pages/AdminModifyRoom/AdminModifyRoom";

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/homepage", element: <Homepage /> },
      { path: "/checkResvRoom", element: <CheckResvRoom /> },
      { path: "/checkResvRoomDetail/:id", element: <CheckResvRoomDetail /> },
      { path: "/checkResvAmen", element: <CheckResvAmen /> },
      { path: "/checkResvTraf", element: <CheckResvTraf /> },
      { path: "/adminCheckAmenCat", element: <AdminCheckAmenCat /> },
      { path: "/adminCheckRoomCat", element: <AdminCheckRoomCat /> },
      { path: "/adminCheckResvRoom", element: <AdminCheckResvRoom /> },
      { path: "/adminCheckResvRoomDetail/:id", element: <AdminCheckResvRoomDetail /> },
      { path: "/resvRoom", element: <ResvRoom /> },
      { path: "/resvAmen", element: <ResvAmen /> },
      { path: "/resvTraf", element: <ResvTraf /> },
      { path: "/payRoom", element: <ResvRoomPay /> },
      { path: "/payTraf", element: <TrafficPay /> },
      { path: "/payAmen", element: <WalfarePay /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/signupSocial", element: <SignUpSocial /> },
      { path: "/login", element: <Login /> },
      { path: "/adminResvRoom", element: <AdminResvRoom /> },
      { path: "/adminManageRoom", element: <AdminManageRoom /> },
      { path: "/adminAddRoom", element: <AdminAddRoom /> },
      { path: "/adminRoomCatAdd", element: <AdminRoomCatAdd /> },
      { path: "/adminRoomCatUpdate/:id", element: <AdminRoomCatUpdate /> },
      { path: "/adminAmenCatAdd", element: <AdminAmenCatAdd /> },
      { path: "/adminAmenCatUpdate/:id", element: <AdminAmenCatUpdate /> },
      { path: "/adminModifyRoom/:id", element: <AdminModifyRoom /> },
    ]
  }
];

export const pages = [
  { route: "/" },
  { route: "/homepage" },
  { route: "/checkResvRoom" },
  { route: "/checkResvRoomDetail/:id" },
  { route: "/checkResvAmen" },
  { route: "/checkResvTraf" },
  { route: "/adminCheckAmenCat" },
  { route: "/adminCheckRoomCat" },
  { route: "/adminCheckResvRoom" },
  { route: "/adminCheckResvRoomDetail/:id" },
  { route: "/resvRoom" },
  { route: "/resvAmen" },
  { route: "/resvTraf" },
  { route: "/payRoom" },
  { route: "/payTraf" },
  { route: "/payAmen" },
  { route: "/login" },
  { route: "/signup" },
  { route: "/signupSocial" },
  { route: "/adminResvRoom" },
  { route: "/adminManageRoom" },
  { route: "/adminAddRoom" },
  { route: "/adminRoomCatAdd" },
  { route: "/adminRoomCatUpdate/:id" },
  { route: "/adminAmenCatAdd" },
  { route: "/adminAmenCatUpdate/:id" },
  { route: "/adminModifyRoom/:id" },
]; // 페이지 목록에 새로운 라우트를 추가
