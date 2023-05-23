import MainTemplate from "@/templates/MainTemplate/MainTemplate.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "@/views/Home/Home";
import SignUp from "@/views/SignUp/SignUp.tsx";
import SignIn from "@/views/SignIn/SignIn.tsx";
import { useDispatch } from "react-redux";
import { useSnackbar } from "@/hooks/useSnackbar.tsx";
import { useMemo } from "react";
import { supabase } from "@/services/supabase.ts";
import { setProducts } from "@/redux/productsReducer.ts";

const App = () => {
  const dispatch = useDispatch();
  const { dispatchSnackbar } = useSnackbar();

  useMemo(() => {
    const getProducts = async () => {
      const { data: products, error } = await supabase.from("product").select("*");

      if (error) {
        dispatchSnackbar(error.message, "error");
      } else {
        dispatch(setProducts(products));
      }
    };

    getProducts();
  }, []);

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
