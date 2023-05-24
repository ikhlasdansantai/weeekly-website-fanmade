import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    base: "/weekly-website-fanmade/",
    build: {
      outDir: "dist",
    },
    plugins: [react()],
  };
});
