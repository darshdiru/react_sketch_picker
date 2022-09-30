/* function to convert from rgba to hex */
export const hexCode = (element) => {
  const rgba = element.replace(/^rgba?\(|\s+|\)$/g, "").split(",");
  const hex = `#${(
    (1 << 24) +
    (parseInt(rgba[0]) << 16) +
    (parseInt(rgba[1]) << 8) +
    parseInt(rgba[2])
  )
    .toString(16)
    .slice(1)}`;

  return hex;
};
