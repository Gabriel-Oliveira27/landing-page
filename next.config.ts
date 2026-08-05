import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prints reais dos projetos podem vir de qualquer host (Cloudinary, GitHub raw...).
  // Enquanto as imagens estiverem em /public isto não é usado, mas já deixa o caminho aberto.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
