import { UserConfig } from 'vite'
import { ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import ssr from 'vite-plugin-ssr/plugin'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfig => {
  return {
    plugins: [vue(), vueJsx(), ssr()],
  }
}
