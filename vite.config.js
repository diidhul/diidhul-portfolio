import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/diidhul-portfolio", // Gantilah dengan nama repository GitHub Anda
});
