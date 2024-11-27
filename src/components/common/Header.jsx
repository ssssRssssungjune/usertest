import { Link } from "react-router-dom";

//24.11.12 지은 [완료] : ButteonEx 적용 테스트.
export default function Header() {
  return (
    <div>
      <Link to="/">
        <p>로고(홈)</p>
      </Link>
      <Link to="/about">
        <p>about</p>
      </Link>
      <Link to="/room">
        <p>room</p>
      </Link>
      <Link to="/special">
        <p>special</p>
      </Link>
      <Link to="/reservation">
        <p>reservation</p>
      </Link>
      <Link to="/community">
        <p>community</p>
      </Link>
      <Link to="/user">
        <p>user</p>
      </Link>
    </div>
  );
}
