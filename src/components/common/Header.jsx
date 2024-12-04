import './css/Header.css';
import backgroundImage from '../../assets/images/headerBackground.jpg';
import React from 'react';
import { Link } from 'react-router-dom'; 


const Header = () => {
  return (
    <div
      id="header"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 1,
        color: 'white', 
      }}
    >
      <h1 className="header_title">s<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      slrklhiHOTEL</Link></h1>
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
            <Link to="/room">Lesalonacces</Link>
          </li>
          <li className="dropdown">
            <Link to="/room">Standard</Link>
          </li>
          <li className="dropdown">
            <Link to="/room">ClubFlour</Link>
          </li>
          <li className="dropdown">
            <Link to="/room">Sweet</Link>
          </li>
          <li className="dropdown">
            <Link to="/room">Family</Link>
          </li>
        </ul>

        <ul className="nav_item">
          Reservation
          <li className="dropdown">
            <Link to="/reservation">예약안내</Link>
          </li>
          <li className="dropdown">
            <Link to="/reservation">실시간예약</Link>
          </li>
        </ul>

        <ul className="nav_item">
          Special
          <li className="dropdown">
            <Link to="/special">Promotion</Link>
          </li>
          <li className="dropdown">
            <Link to="/special">Event</Link>
          </li>
          <li className="dropdown">
            <Link to="/special">BlackFirst</Link>
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
      </div>
      <div className="header_item_menu">
        <Link to="/room">Menu</Link>
      </div>
    </div>
  );
};
export default Header;



// export default function Header() {
//   return (
//     <div id="Header">
//       <div
//   className="header_container"
//   style={{
//     '--background-image': `url(${backgroundImage})`,
//   }}
// >
//         <h1 className="header_title">
//           <Link to="/main">slrklhiHOTEL</Link>
//         </h1>
//       <div className="header_menu_navbar">
//         <ul className="nav_item">
//           <li>
//            <span>About</span>
//             <ul className="dropdown">
//               <li><Link to="/about">호텔소개</Link></li>
//             </ul>
//           </li>
//         </ul>

//         <ul className="nav_item">
//           <li>
//           <span>Roomview</span>
//             <ul className="dropdown">
//             <li> <Link to="/room/standard">스탠다드</Link></li>
//             <li><Link to="/room/deluxe">Deluxe</Link></li>
//             <li> <Link to="/room/suite">Sweet</Link></li>
//             <li><Link to="/room/family">Family</Link></li>
//             <li><Link to="/room/presidential">Presidential</Link></li>
//             </ul>
//            </li>
//           </ul>

//         <ul className='nav_item'>
//           <li>
//           <span> Reservation</span>
//             <ul className="dropdown">
//             <li><Link to="/reservation/reservation-info">information</Link></li>
//             <li className="dropdown"><Link to="/reservation/real-time-reservation">Real-time-reservation</Link></li>
//             </ul>
//           </li>
//         </ul>

//         <ul className="nav_item">
//           <li>
//           <span> Special</span>
//             <ul className="dropdown">
//               <li><Link to="/special/promotion">Promotion</Link></li>
//             <li className="dropdown"><Link to="/special/event">Event</Link></li>
//             <li className="dropdown"><Link to="/special/breakfast">Breakfast</Link></li>
//             </ul>
//           </li> 
//         </ul>

//         <ul className="nav_item">
//           <li>
//           <span>Community</span>
//             <ul className="dropdown">
//              <li> <Link to="/community">Notice</Link></li>
//             <li className="dropdown"><Link to="/community">Q&A</Link></li>
//           </ul>
//         </li>
//       </ul>

//      </div>
//           <div className="header_item_menu">
//             <Link to="/menu">Menu</Link>
//           </div>
//       </div>
//     </div>
//   );
// }