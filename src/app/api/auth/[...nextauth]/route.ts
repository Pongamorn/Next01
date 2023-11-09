import prisma from "@/lib/prisma";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60,
  },
  // ด้านล่างสำหรับ production และใช้ https
  //   useSecureCookies:true,
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // 1 หา User ว่ามีUserรึเปล่า

        const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });

        if (!user) {
          throw new Error("ไม่พบผู้ใช้งานในระบบ");
        }

        // 2 check password โดย ใช้ bcrypt (compare)

        const isValid = await compare(password, user.password);

        if (!isValid) {
          throw new Error("รหัสผ่านไม่ถูก");
        }
        // 3 return ของที่ต้องการใช้ออกไป

        return {
          id: user.id.toString(),
          name: user.fullname,
          email: user.email,
        };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
