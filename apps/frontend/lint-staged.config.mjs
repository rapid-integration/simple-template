/**
 * @type {import("lint-staged").Configuration}
 */
export default {
  "*.{ts,tsx}": (stagedFiles) => [
    "npm run lint:tsc",
    "npm run lint:fsd",
    `npm run lint ${stagedFiles.join(" ")}`,
  ],
  "*.{mjs,ts,tsx,css,html,json,md}": (stagedFiles) => [
    `npm run format ${stagedFiles.filter((file) => !file.includes("/public/")).join(" ")}`,
  ],
  "package.json": ["npm run format:package"],
};
