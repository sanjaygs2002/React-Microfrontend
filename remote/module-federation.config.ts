export const mfConfig = {
  name: "remote", // Must match entryGlobalName in host
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/components/Button", // This must be a valid path
  },
  shared: ["react", "react-dom"],
};
