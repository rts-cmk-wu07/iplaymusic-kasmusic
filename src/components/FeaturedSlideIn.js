import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const FeaturedSlideIn = ({ children }) => {
  let featuredRef = useRef();
  const isInView = useInView(featuredRef, {
    amount: 0.04,
    once: true,
  });

  const featuredSlideIn = useAnimation();

  useEffect(() => {
    if (isInView) {
      featuredSlideIn.start({
        x: 0,
        transition: {
          type: "spring",
          bounce: 0.5,
          duration: 0.8,
        },
      });
    }
    if (!isInView) {
      featuredSlideIn.start({
        x: "-90vw",
      });
    }
  }, [isInView]);
  return (
    <motion.div animate={featuredSlideIn} ref={featuredRef}>
      {children}
    </motion.div>
  );
};

export default FeaturedSlideIn;
