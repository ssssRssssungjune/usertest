import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 useNavigate 훅

import '../../member/css/MemberLoginPage.css';

function MemberLoginPage() {
    const [formData, setFormData] = useState({ userId: '', password: '' }); // userId로 변경
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // 페이지 이동

    // 입력값 변경 처리
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            if (!user) { // 캐싱된 정보가 없을 때만 호출
                const response = await fetch("http://localhost:8080/api/users/me", {
                    method: "GET",
                    credentials: "include",
                });
                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                }
            }
        };

        fetchUserInfo();
    }, [user]); // user가 null일 때만 호출




    // 로그인 버튼 클릭 시 실행되는 함수
    const handleLogin = async () => {
        try {
            // 백엔드 로그인 API 호출
            const response = await fetch('http://localhost:8080/api/users/login', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                credentials: "include", // 쿠키 포함
                body: JSON.stringify(formData), // userId와 password를 전송
            });

            if (response.ok) {
                // 로그인 성공
                alert('로그인 성공!');
                navigate('/'); // 홈으로 이동
            } else {
                // 로그인 실패
                const errorText = await response.text();
                setErrorMessage(errorText); // 백엔드에서 반환된 에러 메시지 출력
            }
        } catch (error) {
            // 네트워크 오류 등 예외 처리
            setErrorMessage('로그인 요청 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className="login-page">
            <h1>로그인</h1>

            <p>잘바즈 회원은 가입 없이 이용할 수 있습니다.</p>
            <p>//🫵🏼 당신은 아닙니다!!!! </p>

            {/* 오류 메시지 표시 */}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <div className="login-form">
                <input
                    type="text"
                    name="userId" // userId로 변경
                    placeholder="아이디를 입력하세요"
                    value={formData.userId} // userId로 변경
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호를 입력하세요"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button
                    id="login-button"
                    onClick={handleLogin}
                    className="custom-login-button"
                >
                    로그인
                </button>
            </div>

            <div className="login-options">
                <p>
                    <button
                        onClick={() => alert('아이디 찾기x')}
                        className="btn-link"
                    >
                        아이디 찾기
                    </button>
                    {' '}
                    /{' '}
                    <button
                        onClick={() => alert('비번 찾기x')}
                        className="btn-link"
                    >
                        비밀번호 찾기
                    </button>
                    {' '}
                    /{' '}
                    <button
                        onClick={() => navigate('/users/register')}
                        className="btn-link"
                    >
                        회원가입
                    </button>
                </p>
            </div>

            {/*<ButtonEx id="sns-login" action={() => alert("카카오톡 로그인")}>*/}
            {/*    가라 카카오톡 아이콘*/}
            {/*</ButtonEx>*/}
        </div>
    );
}

export default MemberLoginPage;
