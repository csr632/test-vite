import { useEffect, useState } from "react";

export function useLazyData() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    import("./lazy-data").then(({ data }) => {
      setData(data);
    });
  }, []);
  return data;
}

if (import.meta.hot) {
  import.meta.hot.acceptDeps("./lazy-data", (lazyData) => {
    console.log("hmr lazy data:", lazyData);
  });
}
