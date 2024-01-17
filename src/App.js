import React, { createContext, useState } from "react";
import A from "./A";

export const myComponent = createContext();
export default function App() {
  const [user, setUser] = useState("jhon");
  return (
    <>
      <h1>hlo</h1>
      <myComponent.Provider value={user}>
        <A></A>
      </myComponent.Provider>
    </>
  );
}
