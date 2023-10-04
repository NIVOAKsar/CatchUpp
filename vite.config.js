import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs/promises';

export default defineConfig(({ command, mode }) => {

  const env = loadEnv(mode, process.cwd(), '')
  const port = env.PORT

  return {

    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    server: {
      port
    },
    plugins: [react()],
    resolve: {
      alias: {
        'src': path.resolve(__dirname, './src/')
      }
    },
    // enables using .js as .jsx files
    // related discussion: https://github.com/vitejs/vite/discussions/3448#discussioncomment-749919

    esbuild: {
      loader: "jsx",
      include: /src\/.*\.jsx?$/,
      // loader: "tsx",
      // include: /src\/.*\.[tj]sx?$/,
      exclude: [],
    },
    optimizeDeps: {
      esbuildOptions: {
        plugins: [
          {
            name: "load-js-files-as-jsx",
            setup(build) {
              build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
                loader: "jsx",
                contents: await fs.readFile(args.path, "utf8"),
              }));
            },
          },
        ],
      },
    }
  }
})





