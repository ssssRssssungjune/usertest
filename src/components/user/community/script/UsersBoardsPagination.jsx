import { Pagination } from "react-bootstrap";

// 24.12.11 지은 : paymnet에서 pagination 가져옴.
export default function UsersBoardsPaginavigation({
  page,
  totalElements,
  totalPages,
  size,
  onPageChange,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className="justify-content-center">
      {/* <Pagination.First /> */}
      <Pagination.Prev
        disabled={page === 1}
        onClick={() => page > 1 && onPageChange(page - 1)}
      />
      {pageNumbers.map((number) => (
        <Pagination.Item
          key={number}
          active={number === page} 
          onClick={() => onPageChange(number)}
        >
          {number}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={page === totalElements}
        onClick={() => page < totalPages && onPageChange(page + 1)}
      />
      {/* <Pagination.Last /> */}
    </Pagination>
  );
}