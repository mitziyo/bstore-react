import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      port: Number(env.PORT) || 5173,
    },
    css: {
      preprocessorOptions: {
        // BookJar shablonidan kelgan SCSS hali @import ishlatadi — @use'ga migratsiya keyinga qoldirilgan
        scss: { silenceDeprecations: ['import'] },
      },
    },
  }
})
