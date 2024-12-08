import React from "react";
import RoomType from "./RoomType";

// RoomContent 컴포넌트
export default function RoomContent() {
  // roomTypeId가 1부터 5까지인 배열
  const roomTypeIds = [1, 2, 3, 4, 5];

  return (
    <div className="room-content">
      <h1>객실 정보</h1>
      <div className="room-type-list">
        {/* roomTypeIds 배열을 map을 사용하여 각 아이디에 대해 RoomTypeCard 컴포넌트를 렌더링 */}
        {roomTypeIds.map((id) => (
          <RoomType key={id} roomTypeId={id} />
        ))}
      </div>
    </div>
  );
}
