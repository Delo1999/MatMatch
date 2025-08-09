// Environment configuration
export const config = {
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
};

// Validation to ensure required environment variables are set
if (!config.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY environment variable is required");
}

if (!config.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

if (!config.JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is required");
}
