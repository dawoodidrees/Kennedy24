import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import prisma from "@/lib/prisma";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials?.email!) {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials?.email,
            },
          });

          if (user) {
            const passwordCorrect = await compare(
              credentials?.password || "",
              user.password
            );

            if (passwordCorrect) {
              return {
                id: user.id,
                email: user.email,
              };
            }
          }
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("signIn", { user, account, profile, email, credentials });
      console.log("will redirect to:", credentials!.callbackUrl as string);
      return credentials ? (credentials.callbackUrl as string) : true;
    },
    async redirect({ url, baseUrl }) {
      console.log("redirect", { url, baseUrl });
      return baseUrl;
    },
    async jwt({ token, user }) {
      if (token?.id) return token;

      const dbUser = await prisma.user.findFirst({
        where: {
          id: user?.id,
        },
      });

      if (!dbUser) {
        if (user) token.id = user?.id;
        return token;
      }

      return {
        id: dbUser.id,
        email: dbUser.email,
      };
    },
    async session({ token, session }) {
      if (token) {
        session.user!.email = token.email;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
