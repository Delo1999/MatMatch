export const authConfig = {
  jwt: {
    secret:
      process.env.JWT_SECRET ||
      (() => {
        throw new Error("JWT_SECRET environment variable is required");
      })(),
    expiresIn: "7d",
  },

  cookies: {
    name: "auth-token", // Cookie name
    httpOnly: true, // Prevent XSS attacks
    secure: process.env.NODE_ENV === "production", // HTTPS only in production
    sameSite: "lax" as const, // CSRF protection
    maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
    path: "/", // Cookie available on all paths
  },

  session: {
    timeout: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    refreshThreshold: 24 * 60 * 60 * 1000, // Refresh if expires within 24 hours
  },

  security: {
    maxLoginAttempts: 5,
    lockoutDuration: 15 * 60 * 1000, // 15 minutes in milliseconds
    bcryptRounds: 12,
  },

  routes: {
    signIn: "/api/auth/signin",
    signUp: "/api/auth/signup",
    signOut: "/api/auth/signout",
    me: "/api/auth/me",
  },

  redirects: {
    afterSignIn: "/",
    afterSignUp: "/",
    afterSignOut: "/",
    requireAuth: "/",
  },
};

// Type definitions for better TypeScript support
export type AuthConfig = typeof authConfig;

export const getJWTSecret = () => authConfig.jwt.secret;
export const getCookieConfig = () => authConfig.cookies;
