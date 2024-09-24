import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";

import Image from "next/image";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return <section className="py-20 md:py-24">

    {/* container that wraps the content for whole section */}
    <div className="container">

      {/* heading and para */}
      <h1 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">Beyond Expectations.</h1>
      <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto  text-center mt-5 tracking-tight md:max-w-md md:mx-auto ">
      {/* Our revolutionary Al SEO tools have transformed our client`s strategies. */}
      Hear the success stories of our clients as we continuously help them build and manage their projects. You could be next!      </p>

      {/* wrapper for cards align them and give effects */}

      <div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <div className="flex gap-5">

          {/* each card */}
          {testimonials.map(testimonials => (

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

        </div>
      </div>
      {/* wrapper for cards end */}
    </div>
  </section>
};
