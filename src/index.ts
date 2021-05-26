import type { Properties } from 'csstype';

const style = (node: HTMLElement, parameters: Properties<string | number>) => {
  function update (parameters: Properties<string | number>) {
    Object.entries(parameters).forEach(([key, value]) => {
      key = key.replace(/[A-Z]/, (substring) => '-' + substring.toLowerCase());

      node.style.setProperty(key, value);
    });
  }

  update(parameters); // invoked when component is first mounted

  return { update } // to be invoked whenever component is updated
};

export default style;
