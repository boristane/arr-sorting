
import buble from 'rollup-plugin-buble';
import progress from 'rollup-plugin-progress';

export default {
  input: './index.js',
  output: {
    name: 'arr-sorting',
    file: './dist/arr-sorting.js',
    format: 'umd',
  },
  plugins: [
    buble({
      objectAssign: 'Object.assign',
    }),
    progress(),
  ],
};
