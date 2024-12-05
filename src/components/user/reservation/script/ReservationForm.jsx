import { useOutletContext } from "react-router-dom";

function ReservationForm(){

    const{
        roomData, 
        reservationData,
        selectedTimestamp, 
        setSelectedTimestamp // function
    } = useOutletContext();

    return(
        <>
            {/* 미니 달력 / 선택한 날짜 */}
            <div>
                <div></div>
                <div></div>               
            </div>
            {/* 객실 선택 */}
            <div>
                <div>

                </div>
                <ul>
                    {roomData.map((item,index)=>(
                            <li key={index}>
                                <p>{item.name}</p>
                                <p>{item.description}</p>
                                <p>{item.basePrice}</p>
                            </li>
                        )
                    )}
                </ul>
            </div>
            {/* 예약자 정보입력 / 총 결제금액 안내 */}
            <div>
                <div></div>
                <div></div>
            </div>
            {/* 취소 / 예약하기 버튼 */}
            <div>
                <button>취소</button>
                <button>예약하기</button>
            </div>
        </>
    );
}

export default ReservationForm;