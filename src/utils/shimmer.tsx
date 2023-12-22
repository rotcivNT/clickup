export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
    <stop stopColor="#f3f3f3" offset="20%" />
    <stop stopColor="#ecebeb" offset="50%" />
    <stop stopColor="#f3f3f3" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f3f3f3" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  <circle cx="30" cy="30" r="30" fill="#ecebeb" />
    <rect x="70" y="15" rx="4" ry="4" width="50%" height="13" fill="#ecebeb" />
    <rect x="70" y="40" rx="3" ry="3" width="40%" height="10" fill="#ecebeb" />
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);
