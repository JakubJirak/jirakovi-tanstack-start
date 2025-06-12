import { env } from "@/env.ts";
import { drizzle } from "drizzle-orm/mysql2";

export const db = drizzle(env.DATABASE_URL);
