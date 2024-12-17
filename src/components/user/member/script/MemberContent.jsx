import { Outlet,Link } from "react-router-dom";

export default function MemberContent() {
    return (
        <div>

            <Outlet/> {/* 하위 라우트를 렌더링 */}
        </div>
    );
}
