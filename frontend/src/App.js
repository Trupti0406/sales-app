import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddSale from "./pages/AddSale";
import Header from "./components/Header";
import TopSales from "./pages/TopSales";
import Revenue from "./pages/Revenue";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="app-bg">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<AddSale />} />
          <Route exact path="/top5Sales" element={<TopSales />} />
          <Route exact path="/revenue" element={<Revenue />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
