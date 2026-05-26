import NextAuth from 'next-auth';

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
  providers: [
    {
      id: 'tcss460',
      name: 'TCSS 460 Auth',
      type: 'oidc',
      issuer: process.env.AUTH_TCSS460_ISSUER,
      clientId: process.env.AUTH_TCSS460_CLIENT_ID,
      clientSecret: process.env.AUTH_TCSS460_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'openid profile email',
          audience: process.env.AUTH_TCSS460_AUDIENCE,
        },
      },
      checks: ['pkce', 'state'],
      client: {
        token_endpoint_auth_method: 'client_secret_post',
      },
    },
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
        token.accessTokenExpires = account.expires_at ? account.expires_at * 1000 : undefined;
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.idToken = token.idToken;
      session.accessTokenExpires = token.accessTokenExpires;

      if (session.user && token.sub) {
        session.user.id = token.sub;
      }

      return session;
    },
  },
  session: { strategy: 'jwt' },
});
