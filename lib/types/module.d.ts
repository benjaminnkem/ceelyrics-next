declare namespace NodeJS {
  export interface ProcessEnv {
    SITE_URL: string;
    NEXT_PUBLIC_BASE_API_URL: string;
    NEXTAUTH_SECRET: string;
  }
}
