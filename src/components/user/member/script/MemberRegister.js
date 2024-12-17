import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/MemberRegister.css';

const MemberRegister = () => {
    const [formData, setFormData] = useState({
        userId: '', // 사용자 아이디
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        phone: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate(); // 페이지 이동을 위한 hook

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 아이디 형식 검증
        const userIdRegex = /^[a-zA-Z0-9]{5,20}$/; // 5~20자의 영문 및 숫자만 허용
        if (!userIdRegex.test(formData.userId)) {
            setErrorMessage('아이디는 5~20자의 영문 및 숫자만 허용됩니다.');
            return;
        }

        // 이메일 형식 검증
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setErrorMessage('올바른 이메일 형식을 입력하세요.');
            return;
        }

        // 연락처 형식 검증
        const phoneRegex = /^01[016789]-?\d{3,4}-?\d{4}$/;
        if (!phoneRegex.test(formData.phone)) {
            setErrorMessage('올바른 연락처 형식을 입력하세요. (예: 010-1234-5678)');
            return;
        }

        // 비밀번호 확인 검증
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: formData.userId, // userId 추가
                    email: formData.email,
                    password: formData.password,
                    name: formData.name,
                    phone: formData.phone,
                }),
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('회원가입에 실패했습니다.');
            }

            // const result = await response.json();
            const result = await response.text();  // 24.12.17 지은 : 임시로 추가
            console.log(result);
            setSuccessMessage(result.message);
            setErrorMessage('');
            setFormData({
                userId: '',
                email: '',
                password: '',
                confirmPassword: '',
                name: '',
                phone: '',
            });
            // navigate(`${result.redirectUrl}?userId=${result.userId}`);
            alert(result); // 24.12.17 지은 : 임시로 추가
            navigate('/users/login');  // 24.12.17 지은 : 임시로 추가
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="register-form">
            <h2>회원가입</h2>

            {/* 에러 메시지 */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}

            {/* 아이디 입력 */}
            <div className="form-group">
                <label htmlFor="userId">아이디*</label>
                <input
                    type="text"
                    id="userId"
                    name="userId"
                    placeholder="사용할 아이디를 입력하세요"
                    value={formData.userId}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* 이메일 입력 */}
            <div className="form-group">
                <label htmlFor="email">이메일*</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="사용할 이메일을 입력하세요"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* 비밀번호 입력 */}
            <div className="form-group">
                <label htmlFor="password">비밀번호*</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="비밀번호를 입력하세요"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="비밀번호를 다시 입력하세요"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* 이름 입력 */}
            <div className="form-group">
                <label htmlFor="name">이름*</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="이름을 입력하세요"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* 연락처 입력 */}
            <div className="form-group">
                <label htmlFor="phone">연락처*</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="연락처를 입력하세요"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>

            <button
                id="registerSubmit"
                type="submit"
                className="custom-button"
            >
                가입 완료
            </button>
        </form>
    );
};

export default MemberRegister;
