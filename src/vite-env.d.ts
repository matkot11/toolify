/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROJECT_URL_SUPABASE: string;
  readonly VITE_PROJECT_ANON_KEY_SUPABASE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
