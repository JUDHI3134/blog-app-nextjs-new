import { defineConfig } from "@prisma/config";
import * as dotenv from "dotenv";
import { resolve } from "path";

// Load .env from project root
dotenv.config({ path: resolve(process.cwd(), ".env") });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing in .env file");
}

export default defineConfig({
  schema: "./prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL,   // Prisma will now read it correctly
  },
});
