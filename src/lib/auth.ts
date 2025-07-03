import { db } from "@/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { account, session, users, verification } from "../db/schema.ts";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "mysql",
    schema: {
      user: users,
      account: account,
      session: session,
      verification: verification,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
});
