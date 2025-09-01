export const mfConfig = {
  name: "remote3",
  filename:"remoteEntry.js",
  exposes: {
    "./Fetch":"./src/Components/Fetch",
  },
 shared: {
  react: { singleton: true, requiredVersion: "^19.0.0" },
  "react-dom": { singleton: true, requiredVersion: "^19.0.0" }
}

};
