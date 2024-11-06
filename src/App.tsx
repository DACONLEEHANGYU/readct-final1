import { BrowserRouter, Routes, Route } from "react-router-dom";
import "public/assets/styles/globals.css";
import HomePage from "@/pages/home/Home";
import DashboardPage from "@/pages/dashboard/Dashboard";

function App() {
  return (
    // react-router-dom 라이브러리를 통해 라우팅 설정 가능
    // 파일 import 후 경로 설정
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
