import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {};

const config = withNextVideo(nextConfig, {
  provider: "vercel-blob",
});

export default config;
