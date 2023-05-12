import MainTemplate from "@/templates/MainTemplate.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "@/views/Home/Home";

const App = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MainTemplate>
  );
};

export default App;
