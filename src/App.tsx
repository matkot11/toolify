import MainTemplate from "@/templates/MainTemplate/MainTemplate.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "@/views/Home/Home";
import Navigation from "@/components/Navigation/Navigation.tsx";
import Search from "@/components/Search/Search.tsx";
import SignUp from "@/views/SignUp/SignUp.tsx";
import SignIn from "@/views/SignIn/SignIn.tsx";

const App = () => {
  return (
    <MainTemplate>
      <Navigation />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </MainTemplate>
  );
};

export default App;
