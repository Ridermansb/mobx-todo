/**
 * @see https://daveceddia.com/testing-for-proptypes-errors/
 */
export default (spy, prop, component) => {
  const errorStr = `Warning: Failed prop type: The prop \`${prop}\` is marked as required in \`${component}\`, but its value is \`undefined\`.\n    in ${component}`
  expect(spy).toBeCalledWith(errorStr);
}