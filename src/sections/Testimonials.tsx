"use client";

import avatar1 from "@/assets/avatar-1.jpeg";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.jpeg";
import avatar5 from "@/assets/avatar-5.jpeg";
import avatar6 from "@/assets/avatar-6.png";
import {motion} from "framer-motion";

import Image from "next/image";

const testimonials = [
  {
    text: "“I am the Lead Game Develop who made AR Kawaii Pets alogn with help of fellow team members”",
    name: "Arav Shakya",
    title: "Hacker @ Algorithmists",
    avatarImg: avatar1,
  },
  {
    text: "“I manged team to effciently mange also I am a video Editor”",
    name: "Hanu Shashwat",
    title: "Collaborator @ Algorithmists",
    avatarImg: avatar2,
  },
  {
    text: "“I am Garphic Designer and I have expertise in Figma”",
    name: "Aditya Raj thakur",
    title: "Designer @ Algorithmists",
    avatarImg: avatar3,
  },
  {
    text: "“I am the Web developer but I also learned unity in 3 days for this hackathon”",
    name: "Om Tiwari Pandey",
    title: "Web Developer @ Algorithmists",
    avatarImg: avatar4,
  },
  {
    text: "“I made designed agme assets and UI and worked on game assets”",
    name: "Sanskar",
    title: "Designer @ Algorithmists",
    avatarImg: avatar5,
  },
  {
    text: "“I am the 3D guy and made required 3D assets”",
    name: "Farhan",
    title: "3D Modeler @ Algorithmists",
    avatarImg: avatar6,
  },
];

export const Testimonials = () => {
  return <section id="testimonials" className="py-20 md:py-24">

    {/* container that wraps the content for whole section */}
    <div className="container">

      {/* heading and para */}
      <h1 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">Meet The Team.</h1>
      <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto  text-center mt-5 tracking-tight md:max-w-md md:mx-auto ">
      {/* Our revolutionary Al SEO tools have transformed our client`s strategies. */}
      Meet our team behind AR Kawaii Petz, who developed the game in just 48 hours, with roles ranging from design and coding to AR integration and gameplay development     </p>

      {/* wrapper for cards align them and give effects */}

      <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
        initial={{
          translateX: '-50%'
        }}

        animate={{
          translateX: 0
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease:'linear'
        }}
        className="flex gap-5 flex-none -translate-x-0">

          {/* each card */}
          {[...testimonials, ...testimonials].map(testimonials => (

            // gives styles card border, effect
            <div key={testimonials.name} className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs  md:max-w-md flex-none">
              {/* content card start | next is quote */}
              <div className="text-lg tracking-tight md:text-xl">{testimonials.text}</div>

              {/* wraps both profile and name */}
              <div className="flex items-center gap-3 mt-5 ">

                {/* image and image wrapper */}
                <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg ">
                  <Image src={testimonials.avatarImg} alt={`Avatar for ${testimonials.name}`} className="h-11 w-11 rounded-lg grayscale"/>
                </div>

                {/* name and ritle */}
                <div >
                  <div >{testimonials.name}</div>
                  <div className="text-white/50 text-sm">{testimonials.title}</div>
                </div>

              </div>
              {/* profile wrapper end */}
              
            </div>
            // card end
          ))}

        </motion.div>
      </div>
      {/* wrapper for cards end */}
    </div>
  </section>
};
