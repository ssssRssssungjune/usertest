import React from "react";
import { Link } from "react-router-dom";
import "../css/RoomType.css";

const RoomType = ({ roomType }) => {
  return (
    <div className="room-type-card">
      <div className="room-image-container">
        {/* Link 컴포넌트를 사용하여 상세 페이지로 이동 */}
        <Link to={`/room/${roomType.name}`}>
          <img
            src={roomType.imagePath}
            alt={roomType.name}
            className="room-image"
          />
        </Link>
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