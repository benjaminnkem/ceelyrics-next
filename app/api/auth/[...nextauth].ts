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
      async authorize() {
        const user = { name: "benjamin", email: "ben@gmail.com", id: "ede" };

        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/account/login",
    signOut: "/account/login",
    error: "/account/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
