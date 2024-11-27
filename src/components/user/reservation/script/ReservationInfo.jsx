import { Link } from "react-router-dom";

export default function ReservationInfo() {
  return (
    <nav className="Reservation_container">
      <h2>예약안내</h2>
      <ul className='Reservation_list'>
        <li>
          <Link to ="/reservation/reservation-info">예약안내</Link>
        </li>
        <li>
          <Link to ="/reservation/real-time-reservation">실시간예약</Link>
        </li>
      </ul>
    </nav>
  );
}