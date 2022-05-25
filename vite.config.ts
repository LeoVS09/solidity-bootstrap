import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    Components({
      resolvers: [AntDesignVueResolver()],
    })
  ],
  resolve: {
    alias: {
      'crypto': 'crypto-browserify',
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
      util: "util",
      web3: path.resolve(__dirname, "./node_modules/web3/dist/web3.min.js"),
    },
  },
})
