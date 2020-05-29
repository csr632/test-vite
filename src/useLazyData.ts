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
