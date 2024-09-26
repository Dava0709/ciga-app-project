import "./assets/css/style.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import PostDetailPage from "./pages/PostDetailPage";
import CategoriesPage from "./pages/CategoriesPage";
import SmokingKill from "./pages/SmokingKill";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/post/:id" element={<PostDetailPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/smoking" element={<SmokingKill />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

