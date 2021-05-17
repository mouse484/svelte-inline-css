import type { Properties } from 'csstype';

const style = (node: HTMLElement, parameters: Properties<string | number>) => {
  Object.entries(parameters).forEach(([key, value]) => {
    node.style.setProperty(key, value);
  });
};

export default style;
