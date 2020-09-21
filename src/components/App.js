import React from "react";
import "../styles/App.css";
import LinkList from "./link-list";
import CreateLink from "./create-link";

function App() {
  return (
    <div style={{ margin: "20px" }}>
      <LinkList />
      <CreateLink />
    </div>
  );
}

export default App;
