import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/CommunityContent.css";


//24.11.25 지은 : CommunityContent 작업.
export default function CommunityContent() {
  return (
    <div id ="usersCommunityContent">
      <Outlet />
    </div>
  );
}
