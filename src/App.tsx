import "./App.css";
import { Route, Routes } from "react-router";
import Page from "./components/homepage/page";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
