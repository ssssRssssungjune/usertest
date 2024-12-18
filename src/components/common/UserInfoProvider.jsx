import React, { createContext, useContext, useState } from 'react';

const UserInfoContext = createContext(null);

export function UserInfoProvider({ children }) {
    const [userInfo, setUserInfo] = useState(null);

    const fetchUserInfo = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/users/info", {
                method: "GET",
                credentials: "include",
            });
            if (response.ok) {
                const data = await response.json();
                setUserInfo(data);
            } else {
                console.error("사용자 정보를 불러오는 데 실패했습니다.");
            }
        } catch (error) {
            console.error("오류 발생:", error);
        }
    };

    return (
        <UserInfoContext.Provider value={{ userInfo, fetchUserInfo }}>
            {children}
        </UserInfoContext.Provider>
    );
}

export const useUserInfo = () => {
    const context = useContext(UserInfoContext);
    if (!context) {
        throw new Error("useUserInfo must be used within a UserInfoProvider");
    }
    return context;
};
