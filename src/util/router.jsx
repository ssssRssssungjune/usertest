import { createBrowserRouter ,Navigate} from "react-router-dom";
import UserPage from "../pages/UserPage";
import RoomContent from "../components/user/room/script/RoomContent";
import SpecialContent from "../components/user/special/script/SpecialContent";
import ReservationContent from "../components/user/reservation/script/ReservationContent";
import CommunityContent from "../components/user/community/script/CommunityContent";
import PaymentContent from "../components/user/payment/script/PaymentContent";
import MemberContent from "../components/user/member/script/MemberContent";
import AboutContent from "../components/user/about/script/AboutContent";
import ReservationGuide from "../components/user/reservation/script/ReservationGuide";
import ReservationCheckOut from "../components/user/reservation/script/ResevationCheckOut";
import ReservationCalendar from "../components/user/reservation/script/ReservationCalendar";
import ReservationForm from "../components/user/reservation/script/ReservationForm";
import MenuLink from "../pages/MenuLink"; 
// import IntroSwiper from "../pages/IntroSwiper";
import IntroSwiperNew from "../pages/IntroSwiperNew";

export const RouterInfo = [
  {
    path: "/mainNew",
    element: <IntroSwiperNew />, // IntroSwiperNew  수정 메인 풀페이지
  },
  // {
  //   path: "/main",
  //   element: <IntroSwiper />, // IntroSwiper 메인 풀페이지
  // },
  {
    path: "/menu",
    element: <MenuLink />, // Header/Footer 없는 페이지
  },

  {
    path: "/",
    element: <UserPage />, //  경로에서 UserPage를 기본으로 렌더링
    children: [
     
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
        children: [
          {
            path: "",
            element: <Navigate to="guide" />
          },
          {
            path: "guide",
            element: <ReservationGuide/>
          },
          {
            path: "check_out",
            element: <ReservationCheckOut/>,
            children: [
              {
                path: "",
                element: <Navigate to="calendar" />
              },
              {
                path: "calendar",
                element: <ReservationCalendar/>
              },
              {
                path: "form",
                element: <ReservationForm/>
              }
            ]
          }
        ]
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
        path: "user",
        element: <MemberContent />,
      },
    ],
  },
];
// createBrowserRouter로 RouterObject 생성
const RouterObject = createBrowserRouter(RouterInfo);

export default RouterObject;