import type { Properties } from 'csstype';

type properties = Properties<string | number>;
type Parameters = properties | properties[];

const style = (node: HTMLElement, parameters: Parameters) => {
  const setStyle = (parameters: Parameters) => {
    let properties: properties = {};
    if (Array.isArray(parameters)) {
      parameters.forEach((value) => {
        properties = { ...properties, ...value };
      });
    } else {
      properties = parameters;
    }

    Object.entries(properties).forEach(([key, value]) => {
      key = key.replace(/[A-Z]/, (substring) => '-' + substring.toLowerCase());

      node.style.setProperty(key, value);
    });
  };

  setStyle(parameters);

  return { update: setStyle };
};

export default style;
