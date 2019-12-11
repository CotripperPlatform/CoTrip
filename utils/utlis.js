export const findByTestAttribute = (component, attribute) => {
  const wrapperClass = component.find(`[data-test='${attribute}']`);
  return wrapperClass;
};
