import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // add other Next.js options here
};

export default async () => {
  if (process.env.NODE_ENV === "development") {
    await setupDevPlatform();
  }
  return nextConfig;
};
