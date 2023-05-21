import { createClient } from "@supabase/supabase-js";
import { productsType } from "@/services/supabaseTypes/productsType.ts";

const supabaseUrl = import.meta.env.VITE_PROJECT_URL_SUPABASE;
const supabaseKey = import.meta.env.VITE_PROJECT_ANON_KEY_SUPABASE;
const supabase = createClient<productsType>(supabaseUrl, supabaseKey);

export { supabase };
