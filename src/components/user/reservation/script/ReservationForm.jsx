import { toDate, getDate } from "date-fns";
import { useOutletContext } from "react-router-dom";
import CustomCalendar from "./CustomCalendar";

function ReservationForm(){

    const{
        roomData, 
        reservationData,
        selectedYearAndMonth,
        selectedTimestamp, 
        setSelectedTimestamp // function
    } = useOutletContext();

    function onClickSelectDay(timestamp){
        setSelectedTimestamp(timestamp);
    }
    return(
        <>
            {/* 미니 달력 / 선택한 날짜 */}
            <div className="row row-cols-2">
                <div>
                    <CustomCalendar
                        year={selectedYearAndMonth.year} 
                        month={selectedYearAndMonth.month-1} 
                        customContent={(timestamp)=>{}} 
                        onCellClick={(timestamp)=>onClickSelectDay(timestamp)}
                    />    
                </div>
                <div>
                    <div>
                        <h1>{
                            `선택일 ${selectedYearAndMonth.year}년 ${selectedYearAndMonth.month}월 
                            ${toDate(selectedTimestamp, { timeZone: 'Asia/Seoul' }).getDate()}일`
                        }</h1>
                    </div>
                    <div>
                        <p><b>예약문의</b> 1544-6062</p>
                        <p><b>기타사항</b> 만 19세 미만은 보호자가 동반해야 예약이 가능합니다.</p>
                    </div>
                </div>               
            </div>
            {/* 객실 선택 */}
            <div>
                <div>
                    <div><h4>"객실선택"<span>현재 예약 가능한 객실 입니다.</span></h4></div>
                    <div>
                        {roomData.map((item,index)=>(
                                <div key={index}>
                                    <p>{item.name}</p>
                                    <p>{item.description}</p>
                                    <p>{item.basePrice}</p>
                                </div>
                            )
                        )}
                    </div>
                </div>
                {/* 예약자 정보입력 / 총 결제금액 안내 */}
                <div className="row row-cols-2">
                    <div>
                        <h4>예약자 정보입력</h4>
                        <div>
                            <div className="row row-cols-2">
                                <div className="col">
                                    <input type="text" name="wr_name" required placeholder="예약자의 이름을 입력해주세요."/>
                                </div>
                                <div className="col">
                                    <input type="text" name="sh_phone" required placeholder="예약자 연락처"/>
                                </div>
                                <div className="col">
                                    {/* 뭘넣지...? */}
                                </div>
                                <div className="col">
                                    <Link to="">환불규정 및 약관</Link>
                                    <span>
                                        <label htmlFor="all_agr">전체 동의</label>
                                        <input type="checkbox" id="all_agr"/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4>결제금액 안내</h4>
                        <div>
                            <div>
                                " 최종결제금액"
                                <p><span>0</span> " 원"</p>
                            </div>
                            <div>
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 취소 / 예약하기 버튼 */}
                <div>
                    <button>취소</button>
                    <button>예약하기</button>
                </div>
            </div>
        </>
    );
}

export default ReservationForm;