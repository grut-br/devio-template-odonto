"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Cria o componente Link animado do Next.js
const MotionLink = motion(Link);

interface ShinyButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children?: React.ReactNode;
  shimmerColor?: string;
  shimmerDuration?: number;
  href?: string;
  target?: string;
  rel?: string;
}

export function ShinyButton({
  children,
  className,
  shimmerColor = "rgba(255, 255, 255, 0.25)",
  shimmerDuration = 2.5,
  href,
  target,
  rel,
  ...props
}: ShinyButtonProps) {
  const content = (
    <>
      {/* O brilho animado */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: shimmerDuration,
          ease: "linear",
        }}
        style={{
          background: `linear-gradient(
            90deg,
            transparent 0%,
            transparent 30%,
            ${shimmerColor} 50%,
            transparent 70%,
            transparent 100%
          )`,
        }}
      />
      {/* Conteúdo do botão */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  const baseClass = cn(
    "relative overflow-hidden cursor-pointer inline-flex items-center justify-center",
    className
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    className: baseClass,
  };

  // Se houver href, renderiza como link
  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("//") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("wa.me");
    
    // Remove propriedades exclusivas de botão para evitar erros no DOM
    const { type, ...restProps } = props as any;

    if (isExternal) {
      return (
        <motion.a
          href={href}
          target={target}
          rel={rel}
          {...motionProps}
          {...restProps}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <MotionLink
        href={href}
        target={target}
        rel={rel}
        {...motionProps}
        {...restProps}
      >
        {content}
      </MotionLink>
    );
  }

  // Caso contrário, renderiza como botão normal
  return (
    <motion.button
      type={(props as any).type || "button"}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
}
