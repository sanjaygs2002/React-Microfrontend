export const mfConfig = {
  name: "remote2",                // 👈 must match host key + entryGlobalName
  filename: "remoteEntry.js",
  exposes: {
    "./Decrement": "./src/Components/Decrement", // 👈 must match import in host
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
};


