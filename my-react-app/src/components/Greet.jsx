import { useState } from "react";

// function Greet({ className, children }) {
//   return (
//     <h1>
//       Hello Nantenaina ! {className} {children}
//     </h1>
//   );
// }

// ====================
// # 04 - State
function Greet() {
  // useState
  const [value, setValue] = useState(0);

  return (
    <>
      <h1>{value}</h1>
      <button type="button" onClick={() => setValue(value + 1)}>
        Change
      </button>
    </>
  );
}

export default Greet;
