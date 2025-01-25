import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/utils/db";
import User from "@/app/models/User";


import { compare,hash } from "bcryptjs";


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          await db();
          
          const user = await User.findOne({ email: credentials?.email });
          if (!user) throw new Error("No user found!");
        

          const isValid =  compare(await hash(credentials?.password,parseInt(process.env.BCRYPT_SALT)), user.password);
          if (!isValid) throw new Error("Invalid password!");

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name
          };
        } catch (error) {
          throw new Error(error.message);
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        //console.log(user)
        token.id = user.id;
        token.email = user.email;
       
        token.name = user.name;
        //console.log({ ...token, ...user})
      }
      return { ...token, ...user};
    },
    async session({ session, token }) {
      console.log(token)
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
  
      return { expires: session.expires, user: {...token}};
    },
    async signIn() {
      return true;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  }
});

export { handler as GET, handler as POST };