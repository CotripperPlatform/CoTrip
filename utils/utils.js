export const findByTestAttribute = (component, attribute) => {
  const wrapperClass = component.find(attribute);
  return wrapperClass;
};
