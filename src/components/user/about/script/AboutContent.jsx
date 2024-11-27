import { Link } from 'react-router-dom';
import '../css/AboutContent.css';

export default function AboutContent() {
  return (
    <nav className="About_container">
      <h2>About</h2>
      <ul className='About_list'>
        <li>
          <Link to ="/Notice">Notice</Link>
        </li>
        <li>
          <Link to ="/Q&A">Q&A</Link>
        </li>
      </ul>
    </nav>
  );
}
