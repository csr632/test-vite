import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [componentName, setComponentName] = useState<
    "component1" | "component2"
  >("component1");
  const Component = useLoadComponent(`/${componentName}.tsx`);
  return (
    <div className="App">
      <button
        onClick={() => {
          setComponentName("component1");
        }}
      >
        show component1
      </button>
      <button
        onClick={() => {
          setComponentName("component2");
        }}
      >
        show component2
      </button>
      <div>{Component ? <Component /> : "Loading..."}</div>
    </div>
  );
}

export default App;

function useLoadComponent(path: string) {
  const [Component, setComponent] = useState<null | React.ComponentType>(null);
  useEffect(() => {
    import(path).then(({ default: def }) => {
      setComponent(() => def);
    });
  }, [path]);
  return Component;
}
