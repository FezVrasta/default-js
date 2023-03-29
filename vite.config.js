import react from '@vitejs/plugin-react';
import { esbuildFlowPlugin, flowPlugin } from '@bunchtogether/vite-plugin-flow';

// https://vitejs.dev/config/
export default {
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildFlowPlugin()],
    },
  },
  plugins: [flowPlugin(), react()],
};
