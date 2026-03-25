import { Route, Routes } from "react-router-dom";
import LawyerSectionPage from "./pages/LawyerSectionPage";
import MainDashboardPage from "./pages/MainDashboardPage";
import MediaPage from "./pages/MediaPage";
import StudentSectionPage from "./pages/StudentSectionPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainDashboardPage />} />
      <Route path="/main-dashboard" element={<MainDashboardPage />} />
      <Route path="/lawyer-section" element={<LawyerSectionPage />} />
      <Route path="/media-page" element={<MediaPage />} />
      <Route path="/student-section" element={<StudentSectionPage />} />
    </Routes>
  );
}

export default App;
