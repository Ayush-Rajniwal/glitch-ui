import { defineConfig } from 'tsup'
import svgrPlugin from 'esbuild-plugin-svgr'

export default defineConfig({
  esbuildPlugins: [svgrPlugin({ exportType: 'named' })],
  entry: ['src/**/*.(ts|tsx)', '!src/**/*.stories.*', '!src/_MOCK_DATA'],
  bundle: true,
  splitting: true,
  sourcemap: true,
  format: 'cjs',
  clean: true,
  outDir: 'dist',
  dts: true,
  target: 'es5',
  platform: 'browser',
  watch: true,
});
