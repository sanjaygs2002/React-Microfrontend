export const mfConfig = {
  name: "remote4",
  filename:"remoteEntry.js",
  exposes: {
    "./List":"./src/Components/List",
  },
  shared: ["react", "react-dom"],
};
