import React from 'react';
import ButtonEx from '../../../common/ButtonEx';
import '../css/MemberSignUp.css';
import rewardsImage from '../../../../assets/images/112.jpg';




function SignUpPage() {
    return (
        <div className="signup-page">
            <h1>회원 가입</h1>
            <p>호텔잘바 리워즈 회원은 포인트 적립, 특별 프로모션 등 다양한 혜택을 드립니다.</p>

            <div className="signup-info">
                <img src={rewardsImage} alt="리워즈 카드" className="signup-image"/>

                <div className="signup-text">
                    <p>처음 가입하시나요?</p>
                    <ButtonEx id="rewards-signup" action={() => alert("리워즈 회원가입")}>
                        잘바 리워즈 회원가입 &gt;
                    </ButtonEx>
                </div>
            </div>

            <h2>SNS로 간편 가입</h2>
            <ButtonEx
                id="sns-signup"
                img={rewardsImage}
                action={() => alert("SNS 회원가입")}
                style={{
                    backgroundImage: `url(${rewardsImage})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '100px',  // 버튼 크기를 원하는 만큼 조정
                    height: '100px', // 이미지 크기에 맞게 조정
                    border: 'none',  // 기본 버튼 스타일 제거
                }}
            >ㅋㅌㅊㅋㅌㅊ
            </ButtonEx>

        </div>
    );
}

export default SignUpPage;