import {createClient} from '@supabase/supabase-js';
import type {Database} from '@/supabase/typing.ts';

export const supabase = createClient<Database>(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
