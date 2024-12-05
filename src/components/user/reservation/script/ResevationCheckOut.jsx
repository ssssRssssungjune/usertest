import { toDate } from "date-fns";
import { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { customFetch } from "../../../../util/customFetch";
import ButtonEx from "../../../common/ButtonEx";

function ReservationCheckOut(){

    // props
    const {roomData} = useOutletContext();

    const [loadComplete,setLoadComplete] = useState(false);
    const nowDate = toDate(Date.now(), { timeZone: 'Asia/Seoul' });

    const [selectedYearAndMonth, setSelectedYearAndMonth] =
    useState({
        year: nowDate.getFullYear(),
        month: nowDate.getMonth()+1,
    });

    const [selectedTimestamp, setSelectedTimestamp] = useState(nowDate.setHours(0, 0, 0, 0));

    // responseData
    const [reservationSummary , setReservationSummary] = useState([
        {
            roomTypeId : 0,
            reservationDate : null,
            bookedRooms : 0
        },
    ]);

    useEffect(()=>{
        const fetchData = async () => {
            const res = await customFetch("http://localhost:8080/api/reservation/test");

            if(res !== null){
                setReservationSummary(res);
                setLoadComplete(true);
            }
        };
        setLoadComplete(false);
        fetchData();
    },[]);

    useEffect(()=>{
        const selectedDate = toDate(selectedTimestamp , {timeZone : 'Asia/Seoul'});
        if(selectedDate.getMonth()+1 !== selectedYearAndMonth.month){
            setSelectedYearAndMonth({
                year : selectedDate.getFullYear(),
                month : selectedDate.getMonth()+1
            });
        }
    },[selectedTimestamp]);

    function onClickPrevButtton(){
        const prevMonth = selectedYearAndMonth;

        setSelectedYearAndMonth({
            year : prevMonth.month-1 > 0 ? prevMonth.year : prevMonth.year-1,
            month : prevMonth.month-1 > 0 ? prevMonth.month-1 : 12
        });
    }

    function onClickNextButtton(){
        const nextMonth = selectedYearAndMonth;

        setSelectedYearAndMonth({
            year : nextMonth.month+1 <= 12 ? nextMonth.year : nextMonth.year+1,
            month : nextMonth.month+1 <= 12 ? nextMonth.month+1 : 1
        });
    }

    return(
        <div className={'container text-container'}>
            <div>
                <ButtonEx id='prev' className='btn' action={onClickPrevButtton}>{'<'}</ButtonEx>
                <h2>{`${selectedYearAndMonth.year}년 ${selectedYearAndMonth.month}월`}</h2>
                <ButtonEx id='next' className='btn' action={onClickNextButtton}>{'>'}</ButtonEx>
            </div>
            {loadComplete && <Outlet 
                context={{
                    roomData: roomData,
                    reservationData: reservationSummary,
                    selectedYearAndMonth: selectedYearAndMonth,
                    selectedTimestamp: selectedTimestamp,
                    setSelectedTimestamp: (e)=>setSelectedTimestamp(e)
                }} 
            />}
        </div>
    );
}

export default ReservationCheckOut;