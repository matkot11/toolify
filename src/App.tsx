import MainTemplate from "@/templates/MainTemplate/MainTemplate.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "@/views/Home/Home";
import SignUp from "@/views/SignUp/SignUp.tsx";
import SignIn from "@/views/SignIn/SignIn.tsx";

const App = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </MainTemplate>
  );
};

export default App;
