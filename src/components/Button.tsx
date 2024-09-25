import { motion } from "framer-motion";

const Button = (props: React.PropsWithChildren) => {
  return (
    <motion.button
      className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 25px rgba(140, 69, 255, 0.9)", // Increase shadow size on hover
        transition: {
          duration: 0.6, // Extend duration for a smoother effect
          ease: [0.25, 0.1, 0.25, 1] // Custom easing curve for a smoother shadow animation
        },
      }}
      whileTap={{ scale: 0.95 }} // Scale down slightly on click
      transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring transition for scaling
    >
      <span>{props.children}</span>
      <div className="absolute inset-0">
        <div className="border rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="border rounded-lg absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
      </div>
    </motion.button>
  );
};

export default Button;