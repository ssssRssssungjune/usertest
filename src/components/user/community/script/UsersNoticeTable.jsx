import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

// 24.12.11 지은 : notice 전체 목록 조회 작업 fin.
export default function UsersNoticeTable({ data, loading }) {
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No notices data available.</div>;

  // 날짜 변환 변수
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const formattedDate = date.toISOString().replace('T', ' ').split('.')[0];
    return formattedDate;
  }

  // 게시글 클릭시 상세 페이지로 이동
  const handleNoticeClick = (noticeId) => {
    navigate(`/community/notice/${noticeId}`);
  }

  return (
    <div className="table-height-fixed">
      <Table
        responsive="xl"
        border={1}
        className="table-group table-hover table-bordered text-center"
      >
        <thead>
          <tr>
            <th style={{width:"100px"}}>#</th>
            <th style={{width:"520px"}}>제목</th>
            <th style={{width:"100px"}}>카테고리</th>
            <th style={{width:"90px"}}>조회수</th>
            <th style={{width:"170px"}}>작성일</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr 
              key={item.noticeId}
              onClick={() => handleNoticeClick(item.noticeId)}
              style={{ cursor: 'pointer' }}
            >
              <td className="table-cell">{item.noticeId}</td>
              <td className="table-cell text-start">{item.title}</td>
              <td className="table-cell">{item.category}</td>
              <td className="table-cell">{item.views}</td>
              <td className="table-cell">{formatDate(item.updatedAt)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}