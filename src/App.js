import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Movies from "./components/Movies";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";

function App() {
  return (
    <main className="container">
      <Routes>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/rentals" element={<Rentals />}></Route>
        <Route path="/not-found" element={<NotFound />}></Route>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </main>
  );
}

export default App;
