declare namespace NodeJS {
  export interface ProcessEnv {
    SITE_URL: string;
    NEXT_PUBLIC_BASE_API_URL: string;
    NEXTAUTH_SECRET: string;
    NEXT_PUBLIC_MM_API_URL: string;
    NEXT_PUBLIC_MM_API_KEY: string;
    NEXT_PUBLIC_SITE_URL: string;
  }
}
