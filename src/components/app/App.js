import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from "../../pages/MainPage";
import SuppliersPage from "../../pages/SuppliersPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/SuppliersPage" element={<SuppliersPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
