import { createEnv } from "npm:@t3-oss/env-nextjs";
import { z } from "npm:zod";
import {
  // cloudflare,
  stripe,
  upstash,
} from "./presets.ts";
const serverSchema = {
  DATABASE_URL: z.string(),
  AUTH_SECRET: z.string(),
  RESEND_KEY: z.string().startsWith("re_", "Invalid Resend API key format"),
  RESEND_AUDIENCE_ID: z.string(),
  EMAIL_FROM: z.string(),
  NEXT_RUNTIME: z.enum(["nodejs", "edge"]).optional(),
  GITHUB_CLIENT_ID: z.string().min(1, "GitHub Client ID is required"),
  GITHUB_CLIENT_SECRET: z.string().min(1, "GitHub Client Secret is required"),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string().min(1, "Google Client Secret is required"),
  NODE_ENV: z.enum(["test", "development", "production"]),

  // Added by Sentry Integration, Vercel Marketplace
  SENTRY_ORG: z.string().min(1).optional(),
  SENTRY_PROJECT: z.string().min(1).optional(),

  FLAGS_SECRET: z.string().min(1).optional(),

  // Added by Vercel
  VERCEL: z.string().optional(),
  ANALYZE: z.string().optional(),
};

const clientSchema = {
  NEXT_PUBLIC_HOST: z
    .string()
    .url()
    .refine((url: string) => !url.endsWith("/"), {
      message: "HOST URL should not end with a trailing slash",
    }),
  NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().min(1).startsWith("G-").optional(),
};

export function createEnvConfig() {
  return createEnv({
  server: serverSchema,
  client: clientSchema,
  emptyStringAsUndefined: true,
  runtimeEnv: {
    DATABASE_URL: Deno.env.get("DATABASE_URL"),
    NEXT_PUBLIC_HOST: Deno.env.get("NEXT_PUBLIC_HOST"),
    EMAIL_FROM: Deno.env.get("EMAIL_FROM"),
    // Resend env
    RESEND_KEY: Deno.env.get("RESEND_KEY"),
    RESEND_AUDIENCE_ID: Deno.env.get("RESEND_AUDIENCE_ID"),
    // Auth env
    AUTH_SECRET: Deno.env.get("AUTH_SECRET"),
    // OAuth env
    GITHUB_CLIENT_ID: Deno.env.get("GITHUB_CLIENT_ID"),
    GITHUB_CLIENT_SECRET: Deno.env.get("GITHUB_CLIENT_SECRET"),
    GOOGLE_CLIENT_SECRET: Deno.env.get("GOOGLE_CLIENT_SECRET"),
    GOOGLE_CLIENT_ID: Deno.env.get("GOOGLE_CLIENT_ID"),
    // Analytics
    NEXT_PUBLIC_GA_MEASUREMENT_ID: Deno.env.get("NEXT_PUBLIC_GA_MEASUREMENT_ID"),

    NODE_ENV: Deno.env.get("NODE_ENV") ?? "development",

    // Added by Sentry Integration, Vercel Marketplace
    SENTRY_ORG: Deno.env.get("SENTRY_ORG"),
    SENTRY_PROJECT: Deno.env.get("SENTRY_PROJECT"),

    FLAGS_SECRET: Deno.env.get("FLAGS_SECRET"),
    VERCEL: Deno.env.get("VERCEL"),
    ANALYZE: Deno.env.get("ANALYZE"),
    NEXT_RUNTIME: Deno.env.get("NEXT_RUNTIME"),
    NEXT_PUBLIC_SENTRY_DSN: Deno.env.get("NEXT_PUBLIC_SENTRY_DSN"),
  },
  onValidationError: (err: unknown) => {
    throw err;
  },
  extends: [
    stripe(),
    upstash(),
    // add this if you are using cloudflare , plugins like  aws-s3 etc
    // cloudflare(),
    // posthogPreset(),
  ],
});
}
export type AppEnv = ReturnType<typeof createEnvConfig>;
