import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/CommunityContent.css";
import { Link } from "react-router-dom";

//24.11.25 지은 : CommunityContent 작업.
export default function CommunityContent() {
  return (
    <nav className="Community_container">
      <ul className='Community_list'>
        <li className="Community_li">
          <Link to ="/community/notice">Notice</Link>
          <div id ="usersCommunityContent">
            <Outlet />
          </div>
        </li>
      </ul>
    </nav>
  );
}
