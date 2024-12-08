import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // Link 컴포넌트 추가
import "../css/RoomType.css";

const RoomType = ({ roomTypeId }) => {
  const [roomType, setRoomType] = useState(null);

  // 객실 유형 정보 fetch
  useEffect(() => {
    const fetchRoomType = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/rooms?typeId=${roomTypeId}`);
        const data = await response.json();
        setRoomType(data[0]);  // 데이터가 배열로 반환된다고 가정 (여기서는 첫 번째 항목을 사용)
      } catch (error) {
        console.error("Error fetching room type:", error);
      }
    };

    if (roomTypeId) {
      fetchRoomType();
    }
  }, [roomTypeId]);

  // 로딩 상태
  if (!roomType) {
    return <div className="loading">로딩 중...</div>;
  }

  return (
    <div className="room-type-card">
      <div className="room-image-container">
        <img
          src={roomType.imagePath}
          alt={roomType.name}
          className="room-image"
        />
      </div>
      <div className="room-info">
        <h3 className="room-name">
          {/* Link 컴포넌트를 사용하여 상세 페이지로 이동 */}
          <Link to={`/room/${roomType.name}`}>{roomType.name}</Link>
        </h3>
        <p className="room-occupancy">
          최소 인원: {roomType.baseOccupancy}명 / 최대 인원: {roomType.maxOccupancy}명
        </p>
      </div>
    </div>
  );
};

export default RoomType;
