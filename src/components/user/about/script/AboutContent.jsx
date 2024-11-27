import { Link } from 'react-router-dom';
import '../css/AboutContent.css';

export default function AboutContent() {
  return (
    <nav className="About_container">
      <h2>호텔소개</h2>
      <ul className='About_list'>
        <li>
          <Link to ="/about">호텔소개</Link>
        </li>
      </ul>
    </nav>
  );
}
