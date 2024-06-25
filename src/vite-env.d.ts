/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOCATIONS_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}