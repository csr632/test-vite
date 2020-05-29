import { useState } from "react";
export function useHook() {
  const [data, setData] = useState(444);
  return data;
}
