import { useEffect } from "react";

export default function useTitle(title) {
  useEffect(() => {
    document.title = `${title} | Hillside Academy`;
    return () => {
      document.title = "Hillside Academy";
    };
  }, [title]);
}