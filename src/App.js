import Questions from "./questions";
import Setup from "./setup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Setup />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
