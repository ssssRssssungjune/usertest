import { Outlet,Link } from "react-router-dom";

export default function MemberContent() {
    return (
        <div>
            <h1>USER 페이지</h1>
            <div>로그인, 마이페이지, 가입성공 페이지 등등이 들어갈 예정</div>
            {/* 네비게이션 링크 추가 */}
            <nav>
                <ul>
                    <li>
                        <Link to="login">로그인</Link> {/* /users/login */}
                    </li>
                    <li>
                        <Link to="register">회원가입</Link> {/* /users/register */}
                    </li>
                    <li>
                        <Link to="terms">약관</Link> {/* /users/terms */}
                    </li>
                    <li>
                        <Link to="signupcom">가입 완료</Link> {/* /users/signupcom */}
                    </li>
                    <li>
                        <Link to="signup">회원하기</Link> {/* /users/signupcom */}
                    </li>
                </ul>
            </nav>
            <Outlet/> {/* 하위 라우트를 렌더링 */}
        </div>
    );
}
