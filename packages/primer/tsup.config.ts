import { defineConfig } from "tsup"

export default defineConfig({
  entry: {
    index: "src/index.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "next", "tailwindcss", "@wilson-romero/tigo"],
  treeshake: true,
  splitting: false,
})
