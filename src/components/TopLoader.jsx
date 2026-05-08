// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TopLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 90);
      });
    }, 200);

    return () => {
      clearInterval(timer);
      setProgress(100);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100]"
      initial={{ width: "0%" }}
      animate={{ width: `${progress}%` }}
      exit={{ width: "100%", opacity: 0 }}
      transition={{ ease: "easeInOut" }}
    />
  );
}
