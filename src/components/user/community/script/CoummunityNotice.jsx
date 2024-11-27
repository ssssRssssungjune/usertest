import { Link } from "react-router-dom";

export default function CommunityNotice() {
  return (
    <nav className="Community_container">
      <h2>Community</h2>
      <ul className='Community_list'>
        <li>
          <Link to ="/community/notice">Notice</Link>
        </li>
      </ul>
    </nav>
  );
}