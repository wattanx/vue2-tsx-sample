import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue2-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx({ compositionAPI: true })],
});
