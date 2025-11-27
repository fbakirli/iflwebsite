import { useState } from "react";
import FirstScreen from "./components/FirstScreen/FirstScreen";
import NewsPage from "./components/NewsPage/NewsPage";
import NewsDetail from "./components/NewsDetail/NewsDetail";

function App() {
  const [activePage, setActivePage] = useState("home");

  const handleNavigate = (page) => {
    if (page === "news" || page === "home" || page === "newsDetail") {
      setActivePage(page);
    }
  };

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#fff" }}>
      {activePage === "news" && (
        <NewsPage activePage={activePage} onNavigate={handleNavigate} />
      )}

      {activePage === "newsDetail" && (
        <NewsDetail activePage={activePage} onNavigate={handleNavigate} />
      )}

      {activePage === "home" && (
        <FirstScreen activePage={activePage} onNavigate={handleNavigate} />
      )}
    </div>
  );
}

export default App;
