import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ButtonEx from '../../../common/ButtonEx';
import '../css/MemberSignUpComplete.css';
import headImage from '../../../../assets/images/head.png';

function MemberSignUpComplete() {
    const location = useLocation(); // 현재 URL 정보를 가져옴
    const [userInfo, setUserInfo] = useState({ name: '', userId: '' });

    // URL에서 userId를 추출
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('userId'); // ?userId=값에서 값 가져오기

    useEffect(() => {
        if (!userId) {
            console.error("userId가 없습니다. API 호출을 중단합니다.");
            return;
        }

        const fetchUserInfo = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/users/info/${userId}`);
                if (response.ok) {
                    const data = await response.json();
                    setUserInfo(data);
                } else {
                    console.error('사용자 정보를 가져오는 데 실패했습니다.');
                }
            } catch (error) {
                console.error('API 호출 오류:', error);
            }
        };

        fetchUserInfo();
    }, [userId]);

    return (
        <div className="signup-complete-page">
            <h1>가입 완료</h1>
            <div className="signup-steps">
                <span>1 약관 동의</span>
                <span>2 회원 정보 입력</span>
                <span>3 가입 완료</span>
            </div>

            <div className="rewards-card">
                <img src={headImage} alt="리워즈 카드" />
                <div className="user-info">
                    <p>이름: {userInfo.name || ''}</p>
                    <p>아이디: {userInfo.userId || ''}</p>
                </div>
            </div>

            <p className="special-offer">잘바즈 회원만의 특별한 혜택을 누려보세요</p>
            <div className="buttons">
                <ButtonEx id="home-button" action={() => alert("홈으로 이동")}>홈으로 이동</ButtonEx>
            </div>
        </div>
    );
}

export default MemberSignUpComplete;
