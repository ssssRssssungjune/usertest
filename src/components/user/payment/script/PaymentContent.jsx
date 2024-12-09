import "bootstrap/dist/css/bootstrap.min.css";
import "../css/PaymentContent.css";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";


export default function PaymentContent() {
const [reservationData, setReservationData] = useState(null);
const [reservationId, setReservationId] = useState("");
const [sendReservationId, setSendReservationId] = useState("1");
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

// 결제 방식 선택
const [selectedPayment, setSelectedPayment] = useState(null);

// 컴포넌트가 마운트될 때 API 호출
useEffect(() => {
  const fetchReservationData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/payments/reservationList/${sendReservationId}`); // 실제 API URL로 변경
      if (!response.ok) {
        throw new Error('Failed to fetch reservation data');
      }
      const data = await response.json();
      setReservationData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  fetchReservationData();
}, [sendReservationId]);

// 로딩, 에러, 예약 데이터가 없을 때 처리
if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;
if (!reservationData) return <div>No reservation data available.</div>;

// 임의로 reservationId 지정해주기
const handleReservationIdChange  = (event) => {
  setReservationId(event.target.value);
}

// 조회 버튼 클릭하면 현재 입력된 reservationId값 보내기.
const handleReservationIdSend = () => {
  setSendReservationId(reservationId)
}

// 결제 방식 선택
const handlePaymentChange = (e) => {
  setSelectedPayment(e.target.id);
};


// 결제 버튼 클릭 시 실행되는 함수
const handleSubmit = async () => {
  if (!selectedPayment) {
    alert('결제방식을 선택해주세요');
    return;
  }

  // const reservationId = reservationData.reservationId; // reservationId 가져오기

   // PayPal 결제 방식 선택 시
   if (selectedPayment === 'payment_paypal' && sendReservationId) {
    try {
      const response = await fetch(`http://localhost:8080/api/paypal/checkout/${sendReservationId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('PayPal 결제 요청에 실패했습니다.');
      }

      // 응답을 JSON 형식으로 파싱
      const responseText = await response.text();

      // 'redirect:'로 시작하는지 확인하고 URL 추출
      if (responseText && responseText.startsWith('redirect:')) {
        const approvalUrl = responseText.slice(9); // 'redirect:' 부분을 제외한 URL만 추출
        window.open(approvalUrl, '_blank', 'width=800,height=600');
      } else {
        alert('예상치 못한 응답을 받았습니다.');
      }
    } catch (error) {
      alert('결제 처리 중 오류가 발생했습니다: ' + error.message);
    }
  }
};

return (
  <div className="container">
    <div id="container_payment" className="text-center">
      <div>
        <h3 className="title">예약 정보</h3>
        <Form>
          <Form.Group as={Row} className="mb-3 justify-content-center d-flex gap-2 ">
            <Col sm="3" className="d-flex justify-content-center align-items-center">
              <Form.Control 
                type="text" 
                value={reservationId}
                placeholder="text" 
                style={{marginRight:"10px"}}
                onChange={handleReservationIdChange}
              />
              <Button 
                size="auto"
                style={{width:"100px"}}
                onClick={handleReservationIdSend}
              >조회</Button>
            </Col>
          </Form.Group>
        </Form>
        <Table responsive="sm" bordered>
          <thead>
            <tr>
              <th>예약 아이디</th>
              <th>객실 타입</th>
              <th>체크인 날짜</th>
              <th>체크아웃 날짜</th>
              <th>기본 인원</th>
              <th>최대 인원</th>
              <th>총 가격</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.values(reservationData).map((value, index) => (
                <td key={index} style={{ padding: '10px' }}>
                  {typeof value === 'string' && value.includes('T') ? (
                    // 날짜 형식일 경우, 'T'를 제거하고 보기 좋게 표시
                    new Date(value).toLocaleDateString('ko-KR').replace(/\.$/, '')
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="select-payments">
        <h3 className="title">결제방식 선택</h3>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            name="paypal" 
            id="payment_paypal"
            onChange={handlePaymentChange}
          />
          <label className="form-check-label" htmlFor="payment_paypal">PayPal</label>
        </div>
      </div>
      <Button variant="primary" type="submit" onClick={handleSubmit}>결제하기</Button>
    </div>
  </div>
  );
}