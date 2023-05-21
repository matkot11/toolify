import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { supabase } from "@/services/supabase.ts";
import { useSnackbar } from "@/hooks/useSnackbar.tsx";
import { setProducts } from "@/redux/productsReducer.ts";

const Home = () => {
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

  return <>Toolify</>;
};

export default Home;
