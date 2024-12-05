function ReservationCalendarCell({ room }) {
    

    return (
        <>
            {
                room.map((item, index) => (
                    <div key={index}>
                        <p>{item.name} - {item.bookedRooms} / {item.roomCount}</p>
                    </div>
                ))
            }
        </>
    );
}

export default ReservationCalendarCell;