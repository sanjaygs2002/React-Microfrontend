export const mfConfig = {
  name: "remote1", // 👈 Must match entryGlobalName in host
  filename: "remoteEntry.js",
  exposes: {
    "./Count": "./src/Components/Count", // 👈 Path to your Count component
     "./User": "./src/User",
    "./store": "./src/store",
  },
 shared: ["react", "react-dom", "react-redux", "@reduxjs/toolkit"],
   
};
