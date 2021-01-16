import type { UserConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

module.exports = {
  jsx: 'react',
  plugins: [reactRefresh()],
  alias: {
    'my-button': 'my-button/src/index.tsx',
    'my-card': 'my-card/src/index.tsx'
  }
} as UserConfig
