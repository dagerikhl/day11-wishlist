export const cz = (
  ...classNames: Array<string | boolean | undefined | null>
) => {
  return classNames
    .filter((className) => !!className)
    .join(" ")
    .trim();
};
