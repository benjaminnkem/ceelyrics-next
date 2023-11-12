import { BASE_API_URL } from "@/lib/constants/variables";
import axios from "axios";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", placeholder: "Enter email address" },
        password: { label: "************", placeholder: "Enter password" },
      },
      async authorize(credentials, _req) {
        if (!credentials?.email || !credentials?.password) return null;
        const { email, password } = credentials;

        const res = await axios.post(`${BASE_API_URL}/auth/login`, { email, password });

        if (res.status === 401) return null;

        const { data: user } = res;
        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      user && { ...token, ...user };
      return token;
    },
    async session({ token, session }) {
      session.user = token.user;
      session.backendToken = token.backendToken;

      return session;
    },
  },
  pages: {
    signIn: "/",
    error: "/account/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
