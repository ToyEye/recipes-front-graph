import { NextAuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const query = `
        mutation($email: String!, $password: String!) {
          signin(email: $email, password: $password) {
          name
          token
          email
        }
      }
      `;

        const variables = {
          email: credentials?.email,
          password: credentials?.password,
        };

        try {
          const response = await fetch(
            "https://recipes-server-graph.onrender.com/graphql",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                query,
                variables,
              }),
            }
          );

          const { data, errors } = await response.json();

          if (errors || !data.signin) {
            console.error("GraphQL errors:", errors);
            return null;
          }

          const user = {
            id: data.signin.email,
            token: data.signin.token,
            name: data.signin.name,
            email: data.signin.email,
          };

          return user;
        } catch (error) {
          console.error("Fetch error:", error);
          return null;
        }
      },
    }),
  ],
};
