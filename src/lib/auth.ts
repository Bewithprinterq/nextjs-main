import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "@/db"; // your drizzle instance
import { account, session, user, verification } from "@/db/schema";
 
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "mysql", 
        schema: {user, account, session, verification},
        usePlural: false //ไม่ต้องเติม s ข้างหลัง
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
        requireEmailVerification: false,
        minPasswordLength: 6
    }
});