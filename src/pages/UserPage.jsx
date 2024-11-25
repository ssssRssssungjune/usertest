import { Routes, Route } from "react-router-dom";
import Header from "../components/common/Header";
import FullScreenPage from "./FullScreenPage";
import AboutContent from "../components/user/about/script/AboutContent";
import RoomContent from "../components/user/room/script/RoomContent";
import SpecialContent from "../components/user/special/script/SpecialContent";
import ReservationContent from "../components/user/reservation/script/ReservationContent";
import CommunityContent from "../components/user/community/script/CommunityContent";
import PaymentContent from "../components/user/payment/script/PaymentContent";
import UserContent from "../components/user/user/script/UserContent";

// 24.11.25 지은 [완료] : 사용자 페이지 경로 테스트.
export default function UserPage() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<FullScreenPage />} />
        <Route path="about" element={<AboutContent />} />
        <Route path="room" element={<RoomContent />} />
        <Route path="special" element={<SpecialContent />} />
        <Route path="reservation" element={<ReservationContent />} />
        <Route path="community" element={<CommunityContent />} />
        <Route path="payment" element={<PaymentContent />} />
        <Route path="user" element={<UserContent />} />
      </Routes>
    </div>
  );
}
