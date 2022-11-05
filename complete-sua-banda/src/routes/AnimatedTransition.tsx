import { motion } from "framer-motion";

interface iAnimationProps {
  children: React.ReactNode;
}

const animationBottom = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

const animationTop = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

const animationPopIn = {
  initial: { opacity: 0, scale: 1.2 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.2 },
};

const animationPopOut = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export const AnimatedEntranceBottom = ({ children }: iAnimationProps) => {
  return (
    <motion.div
      variants={animationBottom}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export const AnimatedEntranceTop = ({ children }: iAnimationProps) => {
  return (
    <motion.div
      variants={animationTop}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export const AnimatedEntrancePopIn = ({ children }: iAnimationProps) => {
  return (
    <motion.div
      variants={animationPopIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export const AnimatedEntrancePopOut = ({ children }: iAnimationProps) => {
  return (
    <motion.div
      variants={animationPopOut}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};
