import './css/Header.css';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="Header">
      <div className="header_container">
        <h1 className="header_title">
          <Link to="/main">slrklhiHOTEL</Link>
        </h1>

        <div className="header_menu_navbar">
          <ul className="nav_item">
            About
            <li className="dropdown">
              <Link to="/about">About</Link>
            </li>
          </ul>
          <ul className="nav_item">
            Roomview
            <li className="dropdown">
              <Link to="/room/standard">스탠다드</Link>
            </li>
            <li className="dropdown">
              <Link to="/room/deluxe">디럭스</Link>
            </li>
            <li className="dropdown">
              <Link to="/room/suite">스위트</Link>
            </li>
            <li className="dropdown">
              <Link to="/room/family">패밀리</Link>
            </li>
            <li className="dropdown">
              <Link to="/room/presidential">프레지덴셜</Link>
            </li>
          </ul>
          <ul className='nav_item'>
            Reservation
            <li className="dropdown">
              <Link to="/reservation/reservation-info">예약안내</Link>
            </li>
            <li className="dropdown">
              <Link to="/reservation/real-time-reservation">실시간예약</Link>
            </li>
          </ul>
          <ul className="nav_item">
            Special
            <li className="dropdown">
              <Link to="/special/promotion">Promotion</Link>
            </li>
            <li className="dropdown">
              <Link to="/special/event">Event</Link>
            </li>
            <li className="dropdown">
              <Link to="/special/breakfast">BreakFast</Link>
            </li>
          </ul>
          <ul className="nav_item">
            Community
            <li className="dropdown">
              <Link to="/community">Notice</Link>
            </li>
            <li className="dropdown">
              <Link to="/community">Q&A</Link>
            </li>
          </ul>
          <div className="header_item_menu">
            {/* Menu 버튼 클릭 시 MenuLink로 이동 */}
            <Link to="/menu">Menu</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
