import type { Properties } from 'csstype';

const style = (node: HTMLElement, parameters: Properties<string | number>) => {
  Object.entries(parameters).forEach(([key, value]) => {
    key = key.replace(/[A-Z]/, (substring) => '-' + substring.toLowerCase());

    node.style.setProperty(key, value);
  });
};

export default style;
