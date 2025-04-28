/// <reference lib="deno.ns" />

import { createEnvConfig } from "./index.ts";

Deno.test("should throw if required env var is missing or invalid", () => {
  Deno.env.set("DATABASE_URL", "not-a-url"); // Invalid URL
  Deno.env.set("AUTH_SECRET", "supersecret");
  Deno.env.set("RESEND_KEY", "re_testkey");
  Deno.env.set("RESEND_AUDIENCE_ID", "audience_id");
  Deno.env.set("EMAIL_FROM", "admin@example.com");
  Deno.env.set("GITHUB_CLIENT_ID", "github-client-id");
  Deno.env.set("GITHUB_CLIENT_SECRET", "github-client-secret");
  Deno.env.set("GOOGLE_CLIENT_ID", "google-client-id");
  Deno.env.set("GOOGLE_CLIENT_SECRET", "google-client-secret");
  Deno.env.set("NODE_ENV", "development");
  Deno.env.set("NEXT_PUBLIC_HOST", "https://example.com/"); // Trailing slash (should fail)

  let threw = false;
  try {
    createEnvConfig();
  } catch (e) {
    threw = true;
  }
  if (!threw) {
    throw new Error("Should throw if env var is invalid");
  }
  [
    "DATABASE_URL", "AUTH_SECRET", "RESEND_KEY", "RESEND_AUDIENCE_ID", "EMAIL_FROM",
    "GITHUB_CLIENT_ID", "GITHUB_CLIENT_SECRET", "GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET",
    "NODE_ENV", "NEXT_PUBLIC_HOST"
  ].forEach((key) => { try { Deno.env.delete(key); } catch {}});
});
