import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      bio?: string;
      image?: string;
      role?: "BASIC" | "ADMIN" | "SUPER_ADMIN";
      createdAt: string;
      updatedAt: string;
    };
    backendToken: {
      accessToken: string;
      refreshToken: string;
    };
  }
}

import { JWT } from "next-auth/jwt";
declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      bio?: string;
      image?: string;
      role?: "BASIC" | "ADMIN" | "SUPER_ADMIN";
      createdAt: string;
      updatedAt: string;
    };
    backendToken: {
      accessToken: string;
      refreshToken: string;
    };
  }
}
