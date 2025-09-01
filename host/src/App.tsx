// import ReactDOM from "react-dom/client";

// import "./index.css";

// const App = () => (
//   <div className="mt-10 text-3xl mx-auto max-w-6xl">
//     <div>Name: host</div>
//     <div>Framework: react-19</div>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

// root.render(<App />);

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client"; // ✅ This import is essential
import List from "remote4/List";

const RemoteButton = React.lazy(() => import("remote/Button"));
const RemoteCount = React.lazy(() => import("remote1/Count"));
const RemoteDecrement= React.lazy(() => import("remote2/Decrement"));
const Fetch= React.lazy(()=>import("remote3/Fetch"));
const ListItem= React.lazy(()=>import("remote4/List"));



const App = () => {
  return (
    <div>
      <h1>Host App</h1>
      <Suspense fallback={<div>Loading remote button...</div>}>
        <RemoteButton />
      </Suspense>
      <Suspense fallback={<div>Loading remote1 count...</div>}>
        <RemoteCount />
      </Suspense>
      <Suspense fallback={<div>Loading</div>}>
      <RemoteDecrement/>
      </Suspense>
      
      <Suspense fallback={<div>Fetching the data</div>}>
      <Fetch/>
      </Suspense>

      <Suspense fallback={<div>Listing the item</div>}>
      <List/>
      </Suspense>

      
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);

