import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";

//24.11.25 지은 [완료] : Router, Routes, Route 적용 테스트
function App() {
  return (
    <BrowserRouter basename="/" future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/*" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
