import { parse, walk } from 'svelte/compiler';
import { PreprocessorGroup } from 'svelte/types/compiler/preprocess';
import type {
  BaseNode,
  ObjectExpression,
  Node,
  Identifier,
  Literal,
} from 'estree';

interface Element extends BaseNode {
  attributes: {
    start: number;
    end: number;
    type: string; // use:action
    name: string; // style
    modifiers: [];
    expression: Node[];
  }[];
}
const isElement = (arg: BaseNode): arg is Element => arg.type === 'Element';

interface Action extends BaseNode {
  type: 'Action';
  expression: ObjectExpression;
}
const isAction = (arg: BaseNode): arg is Action => arg.type === 'Action';

const isIdentifier = (arg: BaseNode): arg is Identifier =>
  arg.type === 'Identifier';
const isLiteral = (arg: BaseNode): arg is Literal => arg.type === 'Literal';

export default (): PreprocessorGroup => {
  return {
    markup({ content }) {
      const ast = parse(content);

      if (ast.html) {
        walk(ast.html, {
          enter(node) {
            if (!isElement(node)) return;

            node.attributes.forEach((attribute) => {
              if (isAction(attribute) && attribute.name === 'style') {
                attribute.expression.properties.forEach((property) => {
                  if (property.type === 'Property') {
                    const { key, value } = property;

                    if (isIdentifier(key) && isLiteral(value)) {
                      console.log(`{ ${key.name}: ${value.raw} }`);
                    }
                  }
                });
              }
            });
          },
        });
      }

      return { code: content };
    },
  };
};

// {
//   start: 72,
//   end: 144,
//   type: 'Element',
//   name: 'div',
//   attributes: [
//     {
//       start: 77,
//       end: 130,
//       type: 'Action',
//       name: 'style',
//       modifiers: [],
//       expression: [Node]
//     }
//   ],
