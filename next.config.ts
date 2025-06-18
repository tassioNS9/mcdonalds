import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Garante ao Next que são confiaveis esses dominio externo
  images: {
    remotePatterns: [{ hostname: "u9a6wmr3as.ufs.sh" }],
  },
};

export default nextConfig;
