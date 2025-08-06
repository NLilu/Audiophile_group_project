const imageMap = import.meta.glob("../assets/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

export function resolveImage(relativePath) {
  const cleaned = relativePath.replace(/^\.?\/?assets\//, "");
  const fullPath = `../assets/${cleaned}`;
  return imageMap[fullPath] || null;
}
