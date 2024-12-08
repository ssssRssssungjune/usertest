import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/RoomDetail.css";

const RoomDetail = () => {
  const { roomTypeName } = useParams();
  const [roomDetail, setRoomDetail] = useState(null);

  useEffect(() => {
    const fetchRoomDetail = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/rooms/detail/${roomTypeName}`);
        const data = await response.json();

        // 데이터 재구성: 동일한 roomTypeName에 대해 어메니티를 하나의 배열로 합치기
        const groupedData = data.reduce((acc, item) => {
          // roomTypeName을 기준으로 객실 정보를 그룹화
          if (!acc[item.roomTypeName]) {
            acc[item.roomTypeName] = {
              ...item,
              amenities: []
            };
          }
          // 각 객실에 대한 어메니티 추가
          acc[item.roomTypeName].amenities.push(item.amenityName);
          return acc;
        }, {});

        // 그룹화된 데이터에서 roomTypeName에 해당하는 객실 정보 추출
        const roomData = groupedData[roomTypeName];
        setRoomDetail(roomData);
      } catch (error) {
        console.error("Error fetching room detail:", error);
      }
    };

    if (roomTypeName) {
      fetchRoomDetail();
    }
  }, [roomTypeName]);

  // 로딩 상태
  if (!roomDetail) {
    return <div className="loading">로딩 중...</div>;
  }

  return (
    <div className="room-detail">
      <h1>{roomDetail.roomTypeName}</h1>
      <div className="room-info">
      <img
          src={roomDetail.imagePath}
          alt={roomDetail.name}
          className="room-image"
        />
        <p><strong>설명:</strong> {roomDetail.roomTypeDescription}</p>
        <p><strong>최소 인원:</strong> {roomDetail.baseOccupancy}명</p>
        <p><strong>최대 인원:</strong> {roomDetail.maxOccupancy}명</p>
        <p><strong>기본 가격:</strong> {roomDetail.basePrice}원</p>
      </div>
      <div className="amenities">
        <h3>어메니티</h3>
        <ul>
          {(roomDetail.amenities || []).map((amenity, index) => (
            <li key={index} className="amenity-item">
              {amenity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoomDetail;
