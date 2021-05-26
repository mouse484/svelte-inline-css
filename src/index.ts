import type { Properties } from 'csstype';

type Parameters = Properties<string | number>;

const style = (node: HTMLElement, parameters: Parameters) => {
  const setStyle = (parameters: Parameters) => {
    Object.entries(parameters).forEach(([key, value]) => {
      key = key.replace(/[A-Z]/, (substring) => '-' + substring.toLowerCase());

      node.style.setProperty(key, value);
    });
  };

  setStyle(parameters);

  return { update: setStyle };
};

export default style;
