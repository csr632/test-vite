import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import * as path from "path";

export default defineConfig({
  plugins: [reactRefresh(), myPlugin()],
  alias: {
    "/@@aliasTarget": "/src/aliasTarget.ts",
  },
  
});


function myPlugin() {
  const virtualFileId = '@my-virtual-file'

  return {
    name: 'my-plugin', // required, will show up in warnings and errors
    resolveId(id: string) {
      if (id === virtualFileId) {
        return virtualFileId
      }
    },
    load(id: string) {
      if (id === virtualFileId) {
        const reExportPath = path.resolve(__dirname, '../project2/util.ts')
        return `export * from "${reExportPath}";`
      }
    }
  }
}