export function getAppUrl() {
    if (
      Deno.env.get("VERCEL_ENV") === "production" ||
      Deno.env.get("NODE_ENV") === "production"
    ) {
      return "https://redantcolony.com";
    }
  
    if (Deno.env.get("VERCEL_ENV") === "preview") {
      return `https://${Deno.env.get("VERCEL_URL")}`;
    }
  
    return "http://localhost:3001";
  }
  
  export function getEmailUrl() {
    if (Deno.env.get("NODE_ENV") === "development") {
      return "http://localhost:3000";
    }
  
    return "https://redantcolony.com";
  }
  
  export function getWebsiteUrl() {
    if (
      Deno.env.get("VERCEL_ENV") === "production" ||
      Deno.env.get("NODE_ENV") === "production"
    ) {
      return "https://redantcolony.com";
    }
  
    if (Deno.env.get("VERCEL_ENV") === "preview") {
      return `https://${Deno.env.get("VERCEL_URL")}`;
    }
  
    return "http://localhost:3000";
  }
  