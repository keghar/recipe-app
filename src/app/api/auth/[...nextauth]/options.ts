import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions ={
    session:{
        strategy: 'jwt'
    },



providers: [
  CredentialsProvider({
 
    name: 'Sign in',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      email: { label: "Email", type: "email", placeholder: "hello@example.com" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {
        const user = {id: '1', name: 'John', email: 'test@test.com'}
        return user
  

     
    }
  })
],
pages: {
    
}}
