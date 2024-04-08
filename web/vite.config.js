import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { watch: { usePolling: true } },
  base: "victoriagz-project-promo-W-module-3-team-1",
});
