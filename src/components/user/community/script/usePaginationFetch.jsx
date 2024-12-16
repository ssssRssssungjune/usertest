import { useCallback, useEffect, useRef, useState } from "react";

// 24.12.11 지은 : payment에서 usePaginationFetch 가져옴.
export default function usePaginationFetch(urlTest) {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);
  const [ totalPages, setTotalPages ] = useState(0);
  const [ totalElements, setTotalElements ] = useState(0);  // 총 페이지 개수
  const [ page, setPage ] = useState(1); // 현재 페이지
  const size = 10; // 한 페이지에 표시할 항목 개수
  const fetchUrl = `http://localhost:8080/api/users/${urlTest}?page=${page}&size=${size}&sort_order=DESC`;
  const isFirstLoad = useRef(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
        const response = await fetch(fetchUrl);
         if (!response.ok) {
           throw new Error("Network response was not ok");
         }
        const result = await response.json();
        setData(result.content);
        setTotalElements(result.totalElements);
        setTotalPages(result.totalPages);
        } catch (error) {
            setError(error.message);
            } finally {
            setLoading(false);
        }
    }, [fetchUrl]);


useEffect(() => {
  if (isFirstLoad.current) {
    fetchData();
    isFirstLoad.current = false;
  } else { // 첫 로딩 이후, 페이지 변경 시 데이터 로드
    fetchData();
  }
}, [fetchUrl, fetchData]);

return { data, loading, error, totalPages, totalElements, page, setPage, size };
}