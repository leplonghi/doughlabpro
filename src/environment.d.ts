
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AD_CLIENT: string;
  readonly VITE_AD_SLOT: string;
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
