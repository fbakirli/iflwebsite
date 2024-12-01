import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NewsFullPage from "./components/NewsFullPage/NewsFullPage";
import NewsDetail from "./components/NewsDetail/NewsDetail";

function App() {
  return (
    <Router>
      <div style={{ width: "100%", minHeight: "100vh", background: "#fff" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsFullPage />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
