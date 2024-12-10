import { createBrowserRouter } from "react-router-dom";
import UserPage from "../pages/UserPage";
import FullScreenPage from "../pages/FullScreenPage";
import RoomContent from "../components/user/room/script/RoomContent";
import SpecialContent from "../components/user/special/script/SpecialContent";
import ReservationContent from "../components/user/reservation/script/ReservationContent";
import CommunityContent from "../components/user/community/script/CommunityContent";
import PaymentContent from "../components/user/payment/script/PaymentContent";
import MemberContent from "../components/user/member/script/MemberContent";
import AboutContent from "../components/user/about/script/AboutContent";

// 사용자 관련 페이지 컴포넌트 추가 import
import MemberTermsPage from "../components/user/member/script/MemberTermsPage";
import MemberRegister from "../components/user/member/script/MemberRegister";
import MemberLoginPage from "../components/user/member/script/MemberLoginPage";
import MemberSignUp from "../components/user/member/script/MemberSignUp";
import MemberSignUpComplete from "../components/user/member/script/MemberSignUpComplete";

export const RouterInfo = [
  {
    path: "/",
    element: <UserPage />, // UserPage가 기본 페이지로 설정됨
    children: [
      {
        index: true, // / 경로로 접속했을 때 FullScreenPage가 표시됨
        element: <FullScreenPage />,
      },
      {
        path: "about",
        element: <AboutContent />,
      },
      {
        path: "room",
        element: <RoomContent />,
      },
      {
        path: "special",
        element: <SpecialContent />,
      },
      {
        path: "reservation",
        element: <ReservationContent />,
      },
      {
        path: "community",
        element: <CommunityContent />,
      },
      {
        path: "payment",
        element: <PaymentContent />,
      },
      {
        path: "users",
        element: <MemberContent />, // MemberContent를 부모로 설정
        children: [
          {
            path: "terms", // /users/terms
            element: <MemberTermsPage />,
          },
          {
            path: "register", // /users/register
            element: <MemberRegister />,
          },
          {
            path: "login", // /users/login
            element: <MemberLoginPage />,
          },
          {
            path: "signup", // /users/signup
            element: <MemberSignUp />,
          },
          {
            path: "signupcom", // /users/signupcom
            element: <MemberSignUpComplete />,
          },
        ],
      },
    ],
  },
];

// createBrowserRouter로 RouterObject 생성
const RouterObject = createBrowserRouter(RouterInfo);

export default RouterObject;
