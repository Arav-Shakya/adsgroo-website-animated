"use client";
import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player";
import productImage from "@/assets/Kawaii.png";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";

// Define the structure of each tab
type Tab = {
  icon: string;
  title: string;
  isNew: boolean;
  backgroundPositionX: number;
  backgroundPositionY: number;
  backgroundSizeX: number;
};

const tabs: Tab[] = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "High-Performance",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "Multiple Interaction",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "User-Friendly",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

type FeatureTabProps = {
  tab: Tab;
  tabIndex: number;
  activeTab: number | null;
  setActiveTab: React.Dispatch<React.SetStateAction<number | null>>;
};

const FeatureTab = ({ tab, tabIndex, activeTab, setActiveTab }: FeatureTabProps) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const xpercentage = useMotionValue(0);
  const ypercentage = useMotionValue(0);
  let xAnimation: any;
  let yAnimation: any;

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xpercentage}% ${ypercentage}%,black,transparent)`;

  const startAnimation = () => {
    if (!tabRef.current) return;
    const { height, width } = tabRef.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;
    const times = [0, width / circumference, (height + width) / circumference, (width * 2 + height) / circumference, 1];

    xAnimation = animate(xpercentage, [0, 100, 100, 0, 0], {
      times,
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
      repeatType: "loop"
    });

    yAnimation = animate(ypercentage, [0, 0, 100, 100, 0], {
      times,
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
      repeatType: "loop"
    });
  };

  const stopAnimation = () => {
    if (xAnimation) xAnimation.stop();
    if (yAnimation) yAnimation.stop();
  };

  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  useEffect(() => {
    // Play animation when tab is active (clicked)
    if (activeTab === tabIndex) {
      if (dotLottieRef.current) {
        dotLottieRef.current.seek(0);
        dotLottieRef.current.play();
      }
      startAnimation();
    } else {
      stopAnimation();
      if (dotLottieRef.current) {
        dotLottieRef.current.stop();
      }
    }
  }, [activeTab]);

  const handleTabClick = () => {
    setActiveTab(tabIndex);
  };

  const handleTabHover = () => {
    if (dotLottieRef.current && activeTab !== tabIndex) {
      // Only play animation on hover if it's not the active tab
      dotLottieRef.current.seek(0);
      dotLottieRef.current.play();
    }
  };

  const handleTabLeave = () => {
    if (dotLottieRef.current && activeTab !== tabIndex) {
      // Stop animation when hover ends, unless it's the active tab
      dotLottieRef.current.stop();
    }
  };

  return (
    <div
      ref={tabRef}
      onClick={handleTabClick}
      onMouseEnter={handleTabHover}
      onMouseLeave={handleTabLeave}
      className="relative border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 cursor-pointer"
    >
      {activeTab === tabIndex && (
        <motion.div
          style={{
            maskImage,
          }}
          className="absolute inset-0 -m-px border border-[#A369FF] rounded-xl"
        />
      )}
      <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex justify-center items-center">
        <DotLottiePlayer ref={dotLottieRef} src={tab.icon} className="h-5 w-5" autoplay={false} />
      </div>
      <div className="font-medium">{tab.title}</div>
      {tab.isNew && <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff]">New</div>}
    </div>
  );
};

export const Features = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null); // Track the active tab

  return (
    <section id="features" className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          {/* Elevate your SEO efforts */}
          AR Game For Astronauts
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto tracking-tight text-center mt-5">
        Our AR game can be played by Astronaut to counter homesickness,loneliness and be mentaly more stable also anyone on earth can play it too .
        <br />
        People can grow their slime pets and it has multiplayer games so that you your pets and other astrnauts and their pets can play together we have include a AR duel but multiple things can be added and you can play with slime in the same you you do with your reaal pets
        </p>

        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              key={tab.title}
              tab={tab}
              tabIndex={tabIndex}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>

        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{ backgroundImage: `url(${productImage.src})` }}
          />
        </div>
      </div>
    </section>
  );
};