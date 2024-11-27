import { createBrowserRouter } from "react-router-dom";
import UserPage from "../pages/UserPage";
import RoomContent from "../components/user/room/script/RoomContent";
import SpecialContent from "../components/user/special/script/SpecialContent";
import ReservationContent from "../components/user/reservation/script/ReservationContent";
import CommunityContent from "../components/user/community/script/CommunityContent";
import PaymentContent from "../components/user/payment/script/PaymentContent";
import MemberContent from "../components/user/member/script/MemberContent";
import AboutContent from "../components/user/about/script/AboutContent";
import IntroSwiper from "../pages/IntroSwiper";
import ReservationInfo from "../components/user/reservation/script/ReservationInfo";
import ReservationRealTime from "../components/user/reservation/script/ReservationRealTime";
import CommunityNotice from "../components/user/community/script/CoummunityNotice";
import RoomStandard from "../components/user/room/script/RoomStandard";
import RoomPresidential from "../components/user/room/script/RoomPresidential";
import RoomFamily from "../components/user/room/script/RoomFamily";
import RoomSuite from "../components/user/room/script/RoomSuite";
import RoomDeluxe from "../components/user/room/script/RoomDeluxe";
import MenuLink from "../components/common/MenuLink";

export const RouterInfo = [
  {
    path: "/main",
    element: <IntroSwiper />, // IntroSwiper 페이지
  },
  {
    path: "/",
    element: <UserPage />, // / 경로에서 UserPage를 기본으로 렌더링
    children: [
      {
        path: "about",
        element: <AboutContent />, // about 페이지
      },
      {
        path: "room",
        element: <RoomContent />,
        children: [
          {
            path: "standard",
            element: <RoomStandard />, // 스탠다드 타입 상세페이지
          },
          {
            path: "deluxe",
            element: <RoomDeluxe />, // 디럭스 타입 상세페이지
          },
          {
            path: "suite",
            element: <RoomSuite />, // 스위트 타입 상세페이지
          },
          {
            path: "family",
            element: <RoomFamily />, // 패밀리 타입 상세페이지
          },
          {
            path: "presidential",
            element: <RoomPresidential />, // 프레지덴셜 타입 상세페이지
          },
        ],
      },
      {
        path: "special",
        element: <SpecialContent />,
      },
      {
        path: "reservation",
        element: <ReservationContent />,
        children: [
          {
            path: "reservation-info",
            element: <ReservationInfo />, // 예약 안내 페이지
          },
          {
            path: "real-time-reservation",
            element: <ReservationRealTime />, // 실시간 예약 페이지
          },
        ],
      },
      {
        path: "community",
        element: <CommunityContent />,
        children: [
          {
            path: "notice",
            element: <CommunityNotice />, // 예약 안내 페이지
          },
        ],
      },
      {
        path: "payment",
        element: <PaymentContent />,
      },
      {
        path: "user",
        element: <MemberContent />,
      },
      {
        path: "menu",
        element: <MenuLink />,
      },
    ],
  },
];
// createBrowserRouter로 RouterObject 생성
const RouterObject = createBrowserRouter(RouterInfo);

export default RouterObject;