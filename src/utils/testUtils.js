export function mergeStyles(styles) {
  return styles.reduce((result, style) => {
    return { ...result, ...style };
  }, {});
}
