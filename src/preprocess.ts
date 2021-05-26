import { PreprocessorGroup } from 'svelte/types/compiler/preprocess';
import { Linter } from 'eslint';
import type { Node } from 'estree';

// @ts-ignore
import pluginSvelte from 'eslint-plugin-svelte3';
const { preprocess, postprocess } = pluginSvelte.processors.svelte3;

export default (): PreprocessorGroup => {
  return {
    async markup({ content, filename }) {
      const linter = new Linter();
      linter.defineRule('svelte-inline-css', {
        create(context) {
          return {
            'Program': (node: Node) => {
              console.log(node);
              context.report({
                message: 'ayaya',
                node,
              });
            },
          };
        },
      });
      const messages = linter.verify(
        content,
        {
          parserOptions: {
            ecmaVersion: 2019,
            sourceType: 'module',
          },
          env: {
            es6: true,
            browser: true,
          },
          plugins: ['svelte3'],
          rules: {
            'svelte-inline-css': 'error',
          },
        },
        {
          filename: filename,
          preprocess,
          postprocess,
        }
      );

      // messages.forEach((message) => console.log(message));

      return { code: content };
    },
  };
};
