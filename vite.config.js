// import { defineConfig } from "vite";
// import { resolve } from "path";

// const root = "src";

// export default defineConfig({
//   root: root,
//   build: {
//     outDir: "../dist",
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, root, "index.html"),
//         sample_01: resolve(__dirname, root, "sample_01/index.html"),
//       },
//     },
//   },
// });

import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");

export default defineConfig({
  root,
});
