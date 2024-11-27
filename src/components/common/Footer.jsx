import { Link } from 'react-router-dom';
import './css/Footer.css';

export default function Footer() {
  return (
    <div id="Footer">
      <div className="Footer_container">
        <h1>
          <Link to="/">slrklhiHOTEL</Link>
        </h1>
        <ul className='conection_foot'>
          <h3>CONTACT US</h3>
          <li>예약문의   1544-8082</li>
          <li>입금계좌  국민 004- 21-0848-651</li>
          <li>카톡문의  @HJ Hotel </li>
        </ul>
        <ul className='location_foot'>
          <p>서울특별시 성동구 성수 1가 2동 현대아티첼리 1007호 </p>
          <p>사업자 번호 : 130-29-4839 | 등록 2001년  통신판매 업종 신고 : 제 2030-서울성수 -9228호  상호 :shkkei 대표 : 김유화 </p>
          <p>고객센터 : 1544-0834 팩스 ; 0505-200-0606 이메일 : shkkei@howep.co.kr</p>
          <p>@shkkei hotel- sample page </p>
        </ul>
      </div>
      <p className='horizon'></p>
      <div className='copyright_foot'>
        <span className='admin'>
          <Link to ="/Admin">Admin</Link>
        </span>
        <span>shkkeiHotel</span>
        <div className='reservation_box'>
          <Link to =" /Reservation">Reservation Now</Link>
        </div>
      </div>
    </div>
  );
}