import React from "react";
import { motion, useReducedMotion } from "framer-motion";

// Fait apparaître un bloc en fondu montant lorsqu'il entre à l'écran.
// Désactivé si l'utilisateur a demandé moins d'animations au système.
export default function Reveal({ children, delay = 0, as = "div", ...props }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      {...props}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </Tag>
  );
}
