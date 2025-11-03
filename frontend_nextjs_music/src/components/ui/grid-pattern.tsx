"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const GridPattern = ({
  width = 40,
  height = 40,
  x = 0,
  y = 0,
  className,
}: {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  className?: string;
}) => {
  return (
    <svg
      className={cn("absolute inset-0 -z-10 h-full w-full", className)}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="grid"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternTransform={`translate(${x}, ${y})`}
        >
          <path
            d={`M ${width} 0 L 0 0 0 ${height}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="1"
            cy="1"
            r="0.5"
            fill="currentColor"
            className="opacity-50"
          />
        </pattern>
      </defs>

      {/* 🔹 Animated grid fade-in */}
      <motion.rect
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        fill="url(#grid)"
        width="100%"
        height="100%"
      />
    </svg>
  );
};
