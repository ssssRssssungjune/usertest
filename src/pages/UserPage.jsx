import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import './css/UserPage.css'; // UserPage 스타일 파일 추가


// 24.11.25 지은 [완료] : 사용자 페이지 경로 테스트.
export default function UserPage() {
  return (
    <div id="userPageContainer">
      <Header/>
      <Outlet /> 
      <Footer/>
    </div>
  );
}