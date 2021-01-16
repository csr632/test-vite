import type { UserConfig } from 'vite'
import * as path from 'path'

import reactRefresh from '@vitejs/plugin-react-refresh'

module.exports = {
  jsx: 'react',
  plugins: [reactRefresh()],
  alias: {
    'my-button': path.resolve(__dirname, '../button/src'),
    'my-card': path.resolve(__dirname, '../card/src')
  }
} as UserConfig
