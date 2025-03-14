import React from "react";
import Card from "./card/Card";

/* let statuses = ["empty", "typing", "completed"]; */

function App() {
  return (
    <>
      {/* {statuses.map((status) => (
        <section key={status} style={{ marginBottom: "200px" }}>
          <h1 style={{ color: "red" }}>({status})</h1>
          <Card status={status} />
        </section>
      ))} */}
      <Card />
    </>
  );
}

export default App;
