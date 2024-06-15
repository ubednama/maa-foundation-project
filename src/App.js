import "./App.css";
import Events from "./Components/Events/Events";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* navbar goes here */}
      <Events></Events>

      <Routes>
        <Route path="/event" element={<></>} />
      </Routes>
    </>
  );
}

export default App;
