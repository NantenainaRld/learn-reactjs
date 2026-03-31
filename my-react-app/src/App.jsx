import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import { useState } from "react";

function App() {
  const [value, sayGoodBye] = useState("Good morning");
  return (
    <>
      {/* <Greet className="This is an example of props" />
      <Greet>
        <button>THis is the children</button>
      </Greet>
      <Welcome /> */}
      {/* # 04 - Method as props  */}
      <h1>{value}</h1>
      <Greet sayGoodBye={sayGoodBye} />
    </>
  );
}

export default App;
