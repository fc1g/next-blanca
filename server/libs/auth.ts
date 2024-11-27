import NextAuth, { User } from 'next-auth';
import Google from 'next-auth/providers/google';

const allowedEmails = [process.env.DEVELOPER_EMAIL, process.env.PROJECT_EMAIL];

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    pages: {
      signIn: '/api/auth/signin',
    },
    async signIn({ user }: { user: User }) {
      if (allowedEmails.includes(user.email || '')) {
        return true;
      }

      console.warn(`Access denied for user: ${user.email}`);
      return false;
    },
  },
  trustHost: true,
};

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
