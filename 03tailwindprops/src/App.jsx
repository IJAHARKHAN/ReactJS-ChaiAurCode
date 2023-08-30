import { React, useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {  

  return (
    <>
      <h1 className="bg-green-400 text-center p-4 rounded-xl">Tailwind Test</h1>
      <Card channel='MoonFrontend'  btnText='Click me'/>
      <Card channel='IjaharFrontend'/>
      {/* <Card makeobject={myObj} /> */}
    </>
  );
}

export default App;
