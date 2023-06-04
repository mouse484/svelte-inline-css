import type { Properties } from 'csstype';

type properties = Properties<string | number>;
type Parameters = properties | properties[];

export const buildStyle = (parameters: Parameters) => {
  let properties: properties = {};
  if (Array.isArray(parameters)) {
    parameters.forEach((value) => {
      properties = { ...properties, ...value };
    });
  } else {
    properties = parameters;
  }

  return Object.entries(properties).map(([key, value]) => {
    key = key.replace(/[A-Z]/, (substring) => '-' + substring.toLowerCase());
    return [key, value];
  });
};

const style = (node: HTMLElement, parameters: Parameters) => {
  const setStyle = (parameters: Parameters) => {
    buildStyle(parameters).forEach(([key, value]) => {
      node.style.setProperty(key, value);
    });
  };

  setStyle(parameters);

  return { update: setStyle };
};

export default style;
