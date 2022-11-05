import { motion } from "framer-motion";

interface iAnimationProps {
  children: React.ReactNode;
}

export const AnimatedTransition = ({ children }: iAnimationProps) => {
  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};
