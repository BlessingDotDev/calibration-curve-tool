import { Routes, Route } from "react-router";
import HomePage from "./pages/home/HomePage";
import PlottingPage from "./pages/plotting/PlottingPage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="plotting" element={<PlottingPage />} />
    </Routes>
  );
}

export default App;