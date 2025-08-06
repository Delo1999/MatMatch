// Temporary config file for API keys
export const config = {
  GEMINI_API_KEY:
    process.env.GEMINI_API_KEY || "AIzaSyCtMilwENwU2YhgZE8NCOhJWWIGspCBx9E",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "mongodb+srv://dilovanhassan:dhtest123@matmatch.jn0kyz6.mongodb.net/MatMatch?retryWrites=true&w=majority&appName=MatMatch",
  JWT_SECRET:
    process.env.JWT_SECRET ||
    "9b6964d627422f715f52d646b3f0fc970ab7b849458fce100960e48e15111be37e92fb59b4b1b15dd23d3278f3738b753caf50256329fcce751cb0ccf7ea12bb",
};
//mongodb+srv://dilovanhassan:dhtest123@matmatch.jn0kyz6.mongodb.net/
