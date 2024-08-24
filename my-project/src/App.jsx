import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  const values = useSelector((val) => val.counter.value);

  return (
    <div>
      <p>{values}</p>
    </div>
  );
};

export default App;
