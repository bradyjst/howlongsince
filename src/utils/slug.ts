export function baseSlug(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function generateUniqueSlug(
  title: string,
  existingSlugs: string[]
) {
  const base = baseSlug(title);
  let slug = base;
  let i = 2;

  while (existingSlugs.includes(slug)) {
    slug = `${base}-${i}`;
    i++;
  }

  return slug;
}
