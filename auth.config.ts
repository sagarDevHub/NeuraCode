import type { NextAuthConfig } from 'next-auth';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export default {
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
