import { createEnv } from "npm:@t3-oss/env-nextjs";
import { z } from "npm:zod";
// Deno-compatible vercel preset
export const vercel = () => ({
  server: {
    VERCEL: z.string().optional(),
    VERCEL_ENV: z.enum(["development", "preview", "production"]).optional(),
    VERCEL_URL: z.string().optional(),
    VERCEL_GIT_COMMIT_SHA: z.string().optional(),
    VERCEL_GIT_COMMIT_MESSAGE: z.string().optional(),
    VERCEL_GIT_REPO_SLUG: z.string().optional(),
    VERCEL_GIT_REPO_OWNER: z.string().optional(),
    VERCEL_GIT_REPO_ID: z.string().optional(),
    VERCEL_GIT_PROVIDER: z.string().optional(),
    VERCEL_GIT_REPO_BRANCH: z.string().optional(),
    VERCEL_GIT_REPO_COMMIT_REF: z.string().optional(),
  },
  runtimeEnv: {
    VERCEL: Deno.env.get("VERCEL"),
    VERCEL_ENV: Deno.env.get("VERCEL_ENV"),
    VERCEL_URL: Deno.env.get("VERCEL_URL"),
    VERCEL_GIT_COMMIT_SHA: Deno.env.get("VERCEL_GIT_COMMIT_SHA"),
    VERCEL_GIT_COMMIT_MESSAGE: Deno.env.get("VERCEL_GIT_COMMIT_MESSAGE"),
    VERCEL_GIT_REPO_SLUG: Deno.env.get("VERCEL_GIT_REPO_SLUG"),
    VERCEL_GIT_REPO_OWNER: Deno.env.get("VERCEL_GIT_REPO_OWNER"),
    VERCEL_GIT_REPO_ID: Deno.env.get("VERCEL_GIT_REPO_ID"),
    VERCEL_GIT_PROVIDER: Deno.env.get("VERCEL_GIT_PROVIDER"),
    VERCEL_GIT_REPO_BRANCH: Deno.env.get("VERCEL_GIT_REPO_BRANCH"),
    VERCEL_GIT_REPO_COMMIT_REF: Deno.env.get("VERCEL_GIT_REPO_COMMIT_REF"),
  },
});
export const cloudflare = () =>
  createEnv({
    server: {
      CLOUDFLARE_ACCOUNT_ID: z.string(),
      CLOUDFLARE_ACCESS_KEY_ID: z.string(),
      CLOUDFLARE_SECRET_ACCESS_KEY: z.string(),
      CLOUDFLARE_BUCKET_NAME: z.string(),
    },
    runtimeEnv: {
      CLOUDFLARE_ACCOUNT_ID: Deno.env.get("CLOUDFLARE_ACCOUNT_ID"),
      CLOUDFLARE_ACCESS_KEY_ID: Deno.env.get("CLOUDFLARE_ACCESS_KEY_ID"),
      CLOUDFLARE_SECRET_ACCESS_KEY: Deno.env.get("CLOUDFLARE_SECRET_ACCESS_KEY"),
      CLOUDFLARE_BUCKET_NAME: Deno.env.get("CLOUDFLARE_BUCKET_NAME"),
    },
  });

export const stripe = () =>
  createEnv({
    server: {
      STRIPE_WEBHOOK_SECRET_LIVE: z.string().optional(),
      STRIPE_API_KEY: z.string().optional(),
      STRIPE_WEBHOOK_SECRET: z.string().optional(),
    },
    client: {
      NEXT_PUBLIC_PRICE_ID_BASIC: z.string(),
      NEXT_PUBLIC_PRICE_ID_PREMIUM: z.string(),
    },
    runtimeEnv: {
      STRIPE_WEBHOOK_SECRET_LIVE: Deno.env.get("STRIPE_WEBHOOK_SECRET_LIVE"),
      STRIPE_API_KEY: Deno.env.get("STRIPE_API_KEY"),
      STRIPE_WEBHOOK_SECRET: Deno.env.get("STRIPE_WEBHOOK_SECRET"),
      NEXT_PUBLIC_PRICE_ID_BASIC: Deno.env.get("NEXT_PUBLIC_PRICE_ID_BASIC"),
      NEXT_PUBLIC_PRICE_ID_PREMIUM: Deno.env.get("NEXT_PUBLIC_PRICE_ID_PREMIUM"),
    },
  });

export const posthogPreset = () => {
  return createEnv({
    client: {
      NEXT_PUBLIC_POSTHOG_KEY: z.string().min(1).startsWith("phc_"),
      NEXT_PUBLIC_POSTHOG_HOST: z.string().min(1).url(),
    },
    runtimeEnv: {
      NEXT_PUBLIC_POSTHOG_KEY: Deno.env.get("NEXT_PUBLIC_POSTHOG_KEY"),
      NEXT_PUBLIC_POSTHOG_HOST: Deno.env.get("NEXT_PUBLIC_POSTHOG_HOST"),
    },
  });
};

export const upstash = () => {
  return createEnv({
    server: {
      UPSTASH_REDIS_REST_URL: z.string().min(1).url().optional(),
      UPSTASH_REDIS_REST_TOKEN: z.string().min(1).optional(),
    },
    runtimeEnv: {
      UPSTASH_REDIS_REST_TOKEN: Deno.env.get("UPSTASH_REDIS_REST_TOKEN"),
      UPSTASH_REDIS_REST_URL: Deno.env.get("UPSTASH_REDIS_REST_URL"),
    },
  });
};
