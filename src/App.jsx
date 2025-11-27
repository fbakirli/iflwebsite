import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import FirstScreen from "./components/FirstScreen/FirstScreen";
import NewsPage from "./components/NewsPage/NewsPage";
import NewsDetail from "./components/NewsDetail/NewsDetail";

function App() {
  return (
    <Router>
      <div style={{ width: "100%", minHeight: "100vh", background: "#fff" }}>
        <Routes>
          <Route path="/" element={<FirstScreen />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
