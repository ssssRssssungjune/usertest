import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

// 24.11.25 지은 [완료] : 사용자 페이지 경로 테스트.
export default function UserPage() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
