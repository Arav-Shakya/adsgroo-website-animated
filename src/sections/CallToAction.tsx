import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";

export const CallToAction = () => {
  return <section className="py-20 md:py-24">
    <div className="container">
      <div className="border border-white/15 py-24 rounded-xl overflow-hidden relative" style={{backgroundImage: `url(${starsBg.src})`}}>
        
        <div className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]" style={{backgroundImage: `url(${gridLines.src})`}}></div>

        <div className="relative"> 

          <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">Get Free Guidance</h2>
          <p className="text-center text-lg md:text-xl max-w-md mx-auto text-white/70 px-4 mt-5 tracking-tight">Book a free consultation call for guidance and a quote. We would be happy to assist you!</p>
          <div className="flex justify-center mt-8">
            <Button>Contact Us</Button>
          </div>

        </div>
      </div>
    </div>
    </section>
};
