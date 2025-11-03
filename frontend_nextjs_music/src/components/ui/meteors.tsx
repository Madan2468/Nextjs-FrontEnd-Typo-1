"use client";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

interface Meteor {
  top: number;
  left: number;
  delay: number;
  duration: number;
}

export const Meteors = ({
  number = 60,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    // 🧠 Generate meteors ONLY on client to avoid SSR mismatch
    const newMeteors = Array.from({ length: number }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.floor(Math.random() * (10 - 5) + 5),
    }));
    setMeteors(newMeteors);
  }, [number]);

  return (
    <motion.div
      className={cn(
        "absolute inset-0 w-full h-full overflow-hidden pointer-events-none",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {meteors.map((meteor, idx) => (
        <span
          key={`meteor-${idx}`}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-400 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']"
          )}
          style={{
            top: `${meteor.top}%`,
            left: `${meteor.left}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        />
      ))}
    </motion.div>
  );
};
