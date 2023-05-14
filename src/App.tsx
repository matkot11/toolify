import MainTemplate from "@/templates/MainTemplate.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "@/views/Home/Home";
import Navigation from "@/components/Navigation/Navigation.tsx";

const App = () => {
  return (
    <MainTemplate>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MainTemplate>
  );
};

export default App;
