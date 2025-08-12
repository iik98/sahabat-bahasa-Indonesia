import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import MateriBahasa from "./pages/materi-bahasa";
import LatihanInteraktif from "./pages/latihan-interaktif";
import MulaiMenulis from "./pages/mulai-menulis";
import PortofolioSaya from "./pages/portofolio-saya";
import LoginPage from "./pages/login/index";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/materi-bahasa" element={<MateriBahasa />} />
            <Route path="/latihan-interaktif" element={<LatihanInteraktif />} />
            <Route path="/mulai-menulis" element={<MulaiMenulis />} />
            <Route path="/portofolio-saya" element={<PortofolioSaya />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
