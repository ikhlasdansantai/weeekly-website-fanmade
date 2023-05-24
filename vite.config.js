import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    plugins: [react()],
    base: "/weeekly-website-fanmade/",
    // build: { outDir: "dist" },
  };
});
