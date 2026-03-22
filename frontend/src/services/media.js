// In dev, Vite proxies /media → Django
// In production, this becomes your CDN or server URL
const BASE = import.meta.env.VITE_MEDIA_URL ?? "";

export function mediaUrl(path) {
  if (!path) return null;
  if (path.startsWith("http")) return path;  // already absolute
  return `${BASE}${path}`;
}