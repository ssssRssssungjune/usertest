import { Link } from "react-router-dom";

//24.11.25 지은 [완료] : RoomContent 테스트.
export default function RoomContent() {
  return (
    <nav className="RoomView_container">
      <h2>RoomView</h2>
      <ul className='RoomViewt_list'>
        <li>
          <Link to ="/room/standard">스탠다드</Link>
        </li>
        <li>
          <Link to ="/room/deluxe">디럭스</Link>
        </li>
        <li>
          <Link to ="/room/suite">스위트</Link>
        </li>
        <li>
          <Link to ="/room/family">패밀리</Link>
        </li>
        <li>
          <Link to ="/room/presidential">프레지덴셜</Link>
        </li>
      </ul>
    </nav>
  );
}
