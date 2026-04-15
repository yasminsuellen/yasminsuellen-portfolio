"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

/*
 * FadeIn — componente reutilizável de animação de entrada.
 *
 * Usa `whileInView` do Framer Motion para animar elementos
 * quando entram na viewport (área visível do usuário).
 *
 * Parâmetros:
 *   delay     → atraso antes da animação iniciar (em segundos)
 *   direction → de qual direção o elemento "entra"
 *
 * Por que `viewport={{ once: true }}`?
 *   Evita que a animação rode toda vez que o elemento entra/sai.
 *   Uma vez animado, fica animado. Mais profissional.
 */
export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
}: FadeInProps) {
  const directionMap = {
    up:    { y: 24 },
    down:  { y: -24 },
    left:  { x: 24 },
    right: { x: -24 },
    none:  {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
