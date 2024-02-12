import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
    // This simulates componentWillUnmount
    return () => {
      console.log("Component unmounted");
    };
  }, []); // Empty dependency array to run only once on mount

  useEffect(() => {
    console.log("Count state changed:", count);
  }, [count]); // Dependency array with count state variable

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div style={{ margin: "20px" }}>{count}</div>
      <button
        className="h-[40px] w-[80px] bg-blue-500 text-white rounded-md mr-2"
        onClick={increase}
      >
        Add
      </button>
      <button
        className="h-[40px] w-[80px] bg-red-500 text-white rounded-md"
        onClick={decrease}
      >
        Delete
      </button>
    </div>
  );
}

export default App;
