import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

// 24.11.25 지은 [완료] : 사용자 페이지 경로 테스트.
export default function UserPage() {
  return (
    <div>
      <Header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}/>
      <Outlet style={{ paddingTop: '60px', paddingBottom: '50px' }}/>
      <Footer style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000 }} />
    </div>
  );
}
