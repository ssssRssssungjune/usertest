import { Link } from "react-router-dom";

//24.11.25 지은 [완료] : SpecialContent 테스트.
export default function SpecialContent() {
  return (
    <nav className="Special_container">
      <h2>Special</h2>
      <ul className='Special_list'>
          <li><Link to ="/Special">event</Link></li>
          <li><Link to ="/Special">Q&A</Link></li>
      </ul>
    </nav>
  );
}
