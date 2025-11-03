"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

/* ✅ Transition setup for smooth animation */
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

/* ✅ Single menu item (Home, Courses, etc.) */
export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white/90 hover:text-white font-medium"
      >
        {item}
      </motion.p>

      {/* Dropdown panel animation */}
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && children && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-3">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-black/70 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-white/5"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

/* ✅ Navbar main container (no borders, glass effect) */
export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={cn(
        "relative rounded-full flex justify-center space-x-8 px-10 py-4 transition-all duration-300",
        "bg-black/40 backdrop-blur-xl shadow-[0_0_20px_rgba(56,189,248,0.1)] hover:bg-black/60"
      )}
    >
      {children}
    </nav>
  );
};

/* ✅ Dropdown item layout (like course cards) */
export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-3 hover:opacity-90 transition">
      <img
        src={src}
        width={120}
        height={60}
        alt={title}
        className="shrink-0 rounded-md shadow-lg"
      />
      <div>
        <h4 className="text-lg font-semibold mb-1 text-white">{title}</h4>
        <p className="text-neutral-400 text-sm max-w-[10rem]">{description}</p>
      </div>
    </a>
  );
};

/* ✅ Hover link component (used inside dropdowns) */
export const HoveredLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <a
      href={href}
      className="text-neutral-300 hover:text-cyan-400 transition-colors duration-200"
    >
      {children}
    </a>
  );
};
