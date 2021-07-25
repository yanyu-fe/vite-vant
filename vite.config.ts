import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginStyleImport from "vite-plugin-style-import";
// @ts-ignore
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      vitePluginStyleImport({
        libs: [
          {
            libraryName: 'vant',
            esModule: true,
            resolveStyle: (name) => `vant/es/${name}/style`,
          },
        ],
      })
  ],
    resolve:{
      alias:{
          "@":path.resolve(__dirname,"src"),
          "~@":path.resolve(__dirname,"src"),
      }
    }
})
