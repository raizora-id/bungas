/// <reference lib="deno.ns" />

import { getAppUrl, getEmailUrl, getWebsiteUrl } from "../envs.ts";

function clearEnv(keys: string[]) {
  for (const key of keys) {
    try { Deno.env.delete(key); } catch (_) {}
  }
}

Deno.test("getAppUrl returns production url when VERCEL_ENV=production", () => {
  Deno.env.set("VERCEL_ENV", "production");
  Deno.env.set("NODE_ENV", "development");
  if (getAppUrl() !== "https://redantcolony.com") {
    throw new Error("Should return production url for VERCEL_ENV=production");
  }
  clearEnv(["VERCEL_ENV", "NODE_ENV"]);
});

Deno.test("getAppUrl returns production url when NODE_ENV=production", () => {
  Deno.env.set("VERCEL_ENV", "");
  Deno.env.set("NODE_ENV", "production");
  if (getAppUrl() !== "https://redantcolony.com") {
    throw new Error("Should return production url for NODE_ENV=production");
  }
  clearEnv(["VERCEL_ENV", "NODE_ENV"]);
});

Deno.test("getAppUrl returns preview url when VERCEL_ENV=preview", () => {
  Deno.env.set("VERCEL_ENV", "preview");
  Deno.env.set("VERCEL_URL", "preview-url.vercel.app");
  Deno.env.set("NODE_ENV", "development");
  if (getAppUrl() !== "https://preview-url.vercel.app") {
    throw new Error("Should return preview url for VERCEL_ENV=preview");
  }
  clearEnv(["VERCEL_ENV", "VERCEL_URL", "NODE_ENV"]);
});

Deno.test("getAppUrl returns localhost for other envs", () => {
  Deno.env.set("VERCEL_ENV", "");
  Deno.env.set("NODE_ENV", "development");
  if (getAppUrl() !== "http://localhost:3001") {
    throw new Error("Should return localhost for other envs");
  }
  clearEnv(["VERCEL_ENV", "NODE_ENV"]);
});

Deno.test("getEmailUrl returns localhost for NODE_ENV=development", () => {
  Deno.env.set("NODE_ENV", "development");
  if (getEmailUrl() !== "http://localhost:3000") {
    throw new Error("Should return localhost for NODE_ENV=development");
  }
  clearEnv(["NODE_ENV"]);
});

Deno.test("getEmailUrl returns production url for other envs", () => {
  Deno.env.set("NODE_ENV", "production");
  if (getEmailUrl() !== "https://redantcolony.com") {
    throw new Error("Should return production url for other envs");
  }
  clearEnv(["NODE_ENV"]);
});

Deno.test("getWebsiteUrl returns production url when VERCEL_ENV=production", () => {
  Deno.env.set("VERCEL_ENV", "production");
  Deno.env.set("NODE_ENV", "development");
  if (getWebsiteUrl() !== "https://redantcolony.com") {
    throw new Error("Should return production url for VERCEL_ENV=production");
  }
  clearEnv(["VERCEL_ENV", "NODE_ENV"]);
});

Deno.test("getWebsiteUrl returns production url when NODE_ENV=production", () => {
  Deno.env.set("VERCEL_ENV", "");
  Deno.env.set("NODE_ENV", "production");
  if (getWebsiteUrl() !== "https://redantcolony.com") {
    throw new Error("Should return production url for NODE_ENV=production");
  }
  clearEnv(["VERCEL_ENV", "NODE_ENV"]);
});

Deno.test("getWebsiteUrl returns preview url when VERCEL_ENV=preview", () => {
  Deno.env.set("VERCEL_ENV", "preview");
  Deno.env.set("VERCEL_URL", "preview-url.vercel.app");
  Deno.env.set("NODE_ENV", "development");
  if (getWebsiteUrl() !== "https://preview-url.vercel.app") {
    throw new Error("Should return preview url for VERCEL_ENV=preview");
  }
  clearEnv(["VERCEL_ENV", "VERCEL_URL", "NODE_ENV"]);
});

Deno.test("getWebsiteUrl returns localhost for other envs", () => {
  Deno.env.set("VERCEL_ENV", "");
  Deno.env.set("NODE_ENV", "development");
  if (getWebsiteUrl() !== "http://localhost:3000") {
    throw new Error("Should return localhost for other envs");
  }
  clearEnv(["VERCEL_ENV", "NODE_ENV"]);
});