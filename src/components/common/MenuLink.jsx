import { Link } from "react-router-dom";
import './css/MenuLink.css';

export default function MenuLink() {
  return (
    <nav className="menu_container">
      <ul className="menu_list">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/room">RoomView</Link></li>
        <li><Link to="/special">Special</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><Link to="/community">Community</Link></li>
      </ul>
    </nav>
  );
}