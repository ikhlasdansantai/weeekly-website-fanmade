import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    base: "/weeekly-website-fanmade/",
    build: {
      outDir: "dist",
    },
    plugins: [react()],
  };
});
