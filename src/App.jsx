import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import Formulir from "./components/pages/Formulir";
import Catalog from "./components/pages/Catalog";
import Lacak from "./components/pages/Lacak";
import NotFound from "./components/pages/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/formulir" element={<Formulir />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/lacak" element={<Lacak />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
