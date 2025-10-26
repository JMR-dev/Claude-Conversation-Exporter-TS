import { defineConfig } from 'wxt';
import { resolve } from 'path';

// https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: 'Claude Conversation Exporter',
    description: 'Export your Claude.ai conversations with full message history',
    permissions: ['activeTab', 'storage'],
    host_permissions: ['https://claude.ai/*'],
  },
  imports: false,
  vite: () => ({
    resolve: {
      alias: {
        '~': resolve(__dirname, 'src'),
      },
    },
  }),
  runner: {
    startUrls: ['https://claude.ai'],
  },
});
