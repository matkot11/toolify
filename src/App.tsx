import MainTemplate from "@/templates/MainTemplate/MainTemplate.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "@/views/Home/Home";
import Navigation from "@/components/Navigation/Navigation.tsx";
import Input from "@/components/Input/Input.tsx";

const App = () => {
  return (
    <MainTemplate>
      <Navigation />
      <Input />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MainTemplate>
  );
};

export default App;
