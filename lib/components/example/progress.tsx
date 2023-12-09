import { Progress } from "netzo/components/ui/progress.tsx";
import { useEffect, useState } from "netzo/deps/preact/compat.ts";

export default () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[60%]" />;
};
