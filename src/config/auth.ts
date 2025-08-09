// Authentication Configuration
export const authConfig = {
  // JWT Settings
  jwt: {
    secret:
      process.env.JWT_SECRET ||
      (() => {
        throw new Error("JWT_SECRET environment variable is required");
      })(),
    expiresIn: "7d", // Token expiration time
  },

  // Cookie Settings
  cookies: {
    name: "auth-token", // Cookie name
    httpOnly: true, // Prevent XSS attacks
    secure: process.env.NODE_ENV === "production", // HTTPS only in production
    sameSite: "lax" as const, // CSRF protection
    maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
    path: "/", // Cookie available on all paths
  },

  // Password Requirements
  password: {
    minLength: 6,
    requireUppercase: false,
    requireLowercase: false,
    requireNumbers: false,
    requireSpecialChars: false,
  },

  // Session Settings
  session: {
    timeout: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    refreshThreshold: 24 * 60 * 60 * 1000, // Refresh if expires within 24 hours
  },

  // Security Settings
  security: {
    maxLoginAttempts: 5,
    lockoutDuration: 15 * 60 * 1000, // 15 minutes in milliseconds
    bcryptRounds: 12, // Password hashing rounds
  },

  // API Routes
  routes: {
    signIn: "/api/auth/signin",
    signUp: "/api/auth/signup",
    signOut: "/api/auth/signout",
    me: "/api/auth/me",
  },

  // Redirect URLs
  redirects: {
    afterSignIn: "/",
    afterSignUp: "/",
    afterSignOut: "/",
    requireAuth: "/", // Where to redirect if auth required
  },
};

// Type definitions for better TypeScript support
export type AuthConfig = typeof authConfig;

// Helper functions
export const getJWTSecret = () => authConfig.jwt.secret;
export const getCookieConfig = () => authConfig.cookies;
export const getPasswordRequirements = () => authConfig.password;

// Validation helpers
export const isValidPassword = (password: string): boolean => {
  const {
    minLength,
    requireUppercase,
    requireLowercase,
    requireNumbers,
    requireSpecialChars,
  } = authConfig.password;

  if (password.length < minLength) return false;
  if (requireUppercase && !/[A-Z]/.test(password)) return false;
  if (requireLowercase && !/[a-z]/.test(password)) return false;
  if (requireNumbers && !/\d/.test(password)) return false;
  if (requireSpecialChars && !/[!@#$%^&*(),.?":{}|<>]/.test(password))
    return false;

  return true;
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
