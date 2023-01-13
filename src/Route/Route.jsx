import { useEffect, useState } from "react";

const Route = ({ path, component }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPathChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("navigate", onPathChange);

    return () => {
      window.removeEventListener("navigate", onPathChange);
    };
  }, []);

  return currentPath === path ? component : null;
};

export default Route;
