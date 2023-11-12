import { BASE_API_URL } from "@/lib/constants/variables";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
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

        const res = await fetch(`${BASE_API_URL}/auth/login`, {
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        if (res.status === 401) {
          console.log(res.statusText);
          return null;
        }

        const user = await res.json();
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
    signIn: "/account/login",
    signOut: "/account/login",
    error: "/account/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
