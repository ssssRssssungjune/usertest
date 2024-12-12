import { useCallback, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

// 24.12.11 지은 [작업중] : UI 및 조회수 증가 수정 해야함.
export default function UsersNoticeDetailPage() {
  const navigate = useNavigate();
  const { noticeId } = useParams();
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  
  const fetchNotice = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/notices/${noticeId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setData(data); 
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, [noticeId]);


  useEffect(() => {
    fetchNotice();
  }, [fetchNotice]);

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
    navigate(`/community/notice`);
  };

  return (
    <> 
      <div style={{marginBottom:"100px"}}>
        <h5 className="contentTitle">공지사항 상세</h5>
        <Table bordered>
          <tbody>
            <tr>
              <td style={{width:"100px"}} className="text-center bg-body-secondary">게시판 ID</td>
              <td colSpan={3}>{data.noticeId}</td>
            </tr>
            <tr>
              <td style={{width:"100px"}} className="text-center bg-body-secondary">카테고리</td>
              <td>{data.category}</td>
              <td style={{width:"100px"}} className="text-center bg-body-secondary">조회수</td>
              <td>{data.views}</td>
            </tr>
            <tr>
              <td style={{width:"100px"}} className="text-center bg-body-secondary">작성일</td>
              <td>{formatDate(data.createdAt)}</td>
              <td style={{width:"100px"}} className="text-center bg-body-secondary">수정일</td>
              <td>{formatDate(data.updatedAt)}</td>
            </tr>
            <tr>
              <td style={{width:"100px"}} className="text-center bg-body-secondary">제목</td>
              <td colSpan={3}>{data.title}</td>
            </tr>
            <tr style={{height: "400px"}}>
              <td style={{width: "100px"}} className="text-center bg-body-secondary">내용</td>
              <td colSpan={3} style={{height: "400px"}}>
                <div style={{maxHeight:"400px", overflowY:"auto"}}>
                  {data.content}
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
        <div style={{marginTop:"30px"}}>
          <Button 
            variant="primary" 
            onClick={handleMoveBack}
            className="position-relative top-0 start-50 translate-middle-x"
          >
              목록 이동
          </Button>
        </div>
      </div>
    </>
  );
}