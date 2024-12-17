import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../member/css/MemberLoginPage.css';
import { useUserInfo } from '../../../common/UserInfoProvider';

function MemberLoginPage() {
    const [formData, setFormData] = useState({ userId: '', password: '' }); // 입력 데이터
    const [errorMessage, setErrorMessage] = useState(''); // 오류 메시지

    const navigate = useNavigate();
    const { fetchUserInfo } = useUserInfo();// 사용자 정보

    // 입력값 변경 처리
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };



    // 로그인 버튼 클릭 시 실행
    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/users/login', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('로그인 성공!');
                await fetchUserInfo(); // 로그인 후 사용자 정보 불러오기
                navigate('/'); // 홈으로 이동
            } else {
                const errorText = await response.text();
                setErrorMessage(errorText);
            }
        } catch (error) {
            setErrorMessage('로그인 요청 중 오류가 발생했습니다.');
        }
    };

    // 페이지 로드 시 사용자 정보 불러오기 (새로고침 대응)
    useEffect(() => {
        fetchUserInfo();
    }, []); // 컴포넌트 마운트 시 한 번만 실행

    return (
        <div className="login-page">
            <h1>로그인</h1>
            <p>잘바즈 회원은 가입 없이 이용할 수 있습니다.</p>
            <p>//🫵🏼 당신은 아닙니다!!!!</p>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <div className="login-form">
                <input
                    type="text"
                    name="userId"
                    placeholder="아이디를 입력하세요"
                    value={formData.userId}
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
                    <button onClick={() => alert('아이디 찾기x')} className="btn-link">아이디 찾기</button>
                    {' / '}
                    <button onClick={() => alert('비번 찾기x')} className="btn-link">비밀번호 찾기</button>
                    {' / '}
                    <button onClick={() => navigate('/users/terms')} className="btn-link">회원가입</button>
                </p>
            </div>


        </div>
    );
}

export default MemberLoginPage;
