import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

// 24.12.11 지은 [작업중] : UI 및 조회수 증가 수정 해야함.
export default function UsersNoticeDetailPage() {
  const navigate = useNavigate();
  const { noticeId } = useParams();
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    const fetchNotice = async () => {
        try {
          const response = await fetch(`http://localhost:8080/api/users/notices/${noticeId}`);
          const data = await response.json();
          setData(data); 
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
    };

    fetchNotice();
  }, [noticeId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data</div>

  // 날짜
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const formattedDate = date.toISOString().replace('T', ' ').split('.')[0];
    return formattedDate;
  }

  // 뒤로가기 modal
  const handleMoveBack = () => {
    navigate(-1);
  };

  return (
    <> 
      <div>
        <Form className="detailFormWrap">
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="auto">게시판 ID</Form.Label>
            <Col sm="auto">
              <Form.Control plaintext readOnly defaultValue={data.noticeId} />
            </Col>
          </Form.Group>
            
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={1}>카테고리</Form.Label>
            <Col sm={2}>
              <Form.Control plaintext readOnly defaultValue={data.category} />
            </Col>
            <Form.Label column sm={1}>조회수</Form.Label>
            <Col sm={2}>
              <Form.Control plaintext readOnly defaultValue={data.views} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm={1}>작성일</Form.Label>
            <Col sm={2}>
              <Form.Control plaintext readOnly defaultValue={formatDate(data.createdAt)} />
            </Col>
            <Form.Label column sm={1}>수정일</Form.Label>
            <Col sm={2}>
              <Form.Control plaintext readOnly defaultValue={formatDate(data.updatedAt)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm={1}>제목</Form.Label>
            <Col sm={6}>
              <Form.Control plaintext readOnly defaultValue={data.title} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm={1}>내용</Form.Label>
            <Col sm={6}>
              <Form.Control plaintext readOnly defaultValue={data.content} />
            </Col>
          </Form.Group>

          <div>
            <Button 
              variant="primary" 
              onClick={handleMoveBack}
            >
                목록 이동
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}