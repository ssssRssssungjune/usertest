import UsersBoardsPaginavigation from "./UsersBoardsPagination";
import usePaginationFetch from "./usePaginationFetch";
import UsersNoticeTable from "./UsersNoticeTable";

// 24.12.11 지은 : pagination, table 구현.
export default function UsersNoticeList() {
  const urlTest = `notices`; // usePaginationFetch함수로 해당 글자 전달

  const {
    data,
    loading,
    error,
    totalPages,
    totalElements,
    page,
    setPage,
    size,
  } = usePaginationFetch(urlTest);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No notices data available.</div>;

  return (
    <>
      <div className="contentTable">
        <UsersNoticeTable data={data} loading={loading} />
        <UsersBoardsPaginavigation
          page={page}
          totalElements={totalElements}
          totalPages={totalPages}
          size={size}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>
    </>
  );
}