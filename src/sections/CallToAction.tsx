"use client";

import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

// Hook to track mouse position relative to an element
const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [to]);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300], { clamp: false });

  // Get mouse position relative to the div
  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

  // Increase the spread by enlarging the radius in radial-gradient
  const maskImage = useMotionTemplate`radial-gradient(300px 300px at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section id="consultation" className="py-20 md:py-24 group" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative"
          animate={{
            backgroundPositionX: starsBg.width,
          }}
          transition={{
            repeat: Infinity,
            duration: 120,
            ease: "linear",
          }}
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsBg.src})`,
          }}
        >
          {/* Purple shade with grid lines */}
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{ backgroundImage: `url(${gridLines.src})` }}
          ></div>

          {/* Mouse-following shade */}
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              WebkitMaskImage: maskImage, // Use WebkitMaskImage for better browser compatibility
              maskImage,
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></motion.div>

          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
              Get The Secrect Sauce
            </h2>
            <p className="text-center text-lg md:text-xl max-w-md mx-auto text-white/70 px-4 mt-5 tracking-tight">
              Our Game was developed on Unity and  you cand download below from Mega apk-59mb project-soze-3.9gb. 
            </p>
            <div className="flex justify-center mt-8">
              <a href="https://mega.nz/file/CIhWWTga#wmlIQNMc_YMAIjALThtO3-SRihi_WI6MURsqs_FW8So" target="_blank" rel="noopener noreferrer">
                <Button>Download The Code</Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};