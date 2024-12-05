import 'bootstrap/dist/css/bootstrap.min.css'; // 임시
import { isSameDay, parseISO } from "date-fns";

import ReservationCalendarCell from "./ReservationCalendarCell";
import { useNavigate, useOutletContext } from "react-router-dom";
import CustomCalendar from './CustomCalendar';


function ReservationCalendar()
{
    const {
            roomData, 
            reservationData, 
            selectedYearAndMonth, 
            setSelectedTimestamp // function
        } = useOutletContext();

    const bTest = false;
    const nav = useNavigate();

    function onClickSelectDay(timestamp){
        setSelectedTimestamp(timestamp);
        nav("/reservation/check_out/form");
    }

    function getRoomDataForDate(timestamp){

        return roomData.map((room) => {
            // 예약된 객실 수 계산
            const reservation = reservationData.find(
                (item) => item.roomTypeId === room.roomTypeId && isSameDay(parseISO(item.reservationDate), timestamp)
            );
    
            const bookedRooms = reservation ? reservation.bookedRooms : 0; // 예약이 없으면 0으로 설정
            
            const data = {
                ...room,
                bookedRooms: bookedRooms
            }
            console.log(data);
            
            return data;
        });
    };



// {/* 24.11.14 한택 [테스트코드]: 데이터가 맞게 들어갔는지 테스트하기 위한 코드입니다.  */}
// {bTest ? (<>
//     <p>{toDate(timestamp, { timeZone: 'Asia/Seoul' }).getDay()}</p>
//     <p>{toDate(timestamp, { timeZone: 'Asia/Seoul' }).getDate()}</p>
// </>) : (<>
//     <ReservationCalendarCell 
//         date={toDate(timestamp, { timeZone: 'Asia/Seoul' }).getDate()}
//         room={getRoomDataForDate(timestamp)}
//         onClick={()=>onClickSelectDay(timestamp)}
//     />
// </>)
// }

// (timestamp) => {
//     const roomData = getRoomDataForDate(timestamp);
//     console.log("roomData: "+roomData);
//     return (<ReservationCalendarCell room={roomData} />);
// }
    return (
        <>
            {/*onClick={(timestamp)=>onClickSelectDay(timestamp)}*/}
            <CustomCalendar 
                year={selectedYearAndMonth.year} 
                month={selectedYearAndMonth.month-1} 
                customContent={(timestamp)=>{
                    return (<ReservationCalendarCell room={getRoomDataForDate(timestamp)}/>);
                }} 
                onCellClick={(timestamp)=>onClickSelectDay(timestamp)}
            />
                
        </>
    );
}

export default ReservationCalendar;