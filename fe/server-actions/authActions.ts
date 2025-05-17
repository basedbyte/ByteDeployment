"use server";
import { neon } from "@neondatabase/serverless";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const sql = neon(process.env.POSTGRES_URL!);

// Helper to check if value is an email
function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function loginOrSignup(
  mode: "login" | "signup",
  usernameOrEmail: string,
  password: string
) {
  try {
    if (mode === "signup") {
      let existing;
      if (isEmail(usernameOrEmail)) {
        // Check if email exists
        existing = await sql`SELECT id FROM users WHERE email = ${usernameOrEmail}`;
        if (existing.length > 0) {
          return { error: "Email already registered." };
        }
        const hash = await bcrypt.hash(password, 10);
        await sql`INSERT INTO users (email, password) VALUES (${usernameOrEmail}, ${hash})`;
      } else {
        // Check if username exists
        existing = await sql`SELECT id FROM users WHERE username = ${usernameOrEmail}`;
        if (existing.length > 0) {
          return { error: "Username already taken." };
        }
        const hash = await bcrypt.hash(password, 10);
        await sql`INSERT INTO users (username, password) VALUES (${usernameOrEmail}, ${hash})`;
      }
      return { success: true };
    } else {
      // login: check if input is email or username, then query accordingly
      let user;
      if (isEmail(usernameOrEmail)) {
        user = await sql`SELECT * FROM users WHERE email = ${usernameOrEmail}`;
      } else {
        user = await sql`SELECT * FROM users WHERE username = ${usernameOrEmail}`;
      }
      if (user.length === 0) return { error: "User not found." };
      const valid = await bcrypt.compare(password, user[0].password);
      if (!valid) return { error: "Invalid password." };

      const token = jwt.sign(
      { userId: user[0].id, email: user[0].email, username: user[0].username },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    // Set cookie (server action context)
    (await cookies()).set("auth_token", token, {
        httpOnly: true,
        secure: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7, 
        sameSite: "lax",
    });
    

    return { success: true };
    
    }
  } catch (e) {
    return { error: "Database error." };
  }
}