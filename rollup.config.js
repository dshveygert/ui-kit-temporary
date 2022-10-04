import typescript from '@rollup/plugin-typescript'
import smartAsset from 'rollup-plugin-smart-asset'


export default {
  input: {
    main: 'src/main.ts',
    'constants/index': 'src/constants/index.ts',
    'hooks/index': 'src/hooks/index.ts',
    'utils/index': 'src/utils/index.ts'
  },
  output: {
    dir: 'dist',
    entryFileNames: '[name].js',
    chunkFileNames: 'chunks/[name].js',
    format: 'cjs',
    exports: 'auto',
    strict: true
  },
  plugins: [
    typescript({ tsconfig: './tsconfig.npm.json' }),
    smartAsset({
      url: 'copy',
      keepImport: true,
      assetsPath: 'images'
    })
  ],
  external: ['react', 'react-dom']
}
