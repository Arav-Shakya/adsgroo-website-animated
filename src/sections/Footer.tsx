import LogoIcon from "../assets/logo.svg";

export const Footer = () => {
  return <footer className="mt-5 border-t border-white/15">
    <div className="container  ">
      <div className=" flex flex-col md:flex-row md:justify-between md:items-center">

        <div className="flex gap-4 items-center">
          <LogoIcon className="w-8 h-8 max-[766px]:mt-5" />
          <p className="text-white text-md font-medium justify-center items-center max-[766px]:mt-5">ADSGROO</p>
          <p className="text-white/50 text-xs max-md:hidden">Copyright 2023. All rights reserved</p>
        </div>
        <div className=" py-8">
          <nav className="flex flex-col md:flex-row gap-4 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition">Clients</a>
              <a href="#" className="text-white/70 hover:text-white transition">Features</a>
              <a href="#" className="text-white/70 hover:text-white transition">Testimonials</a>
              <a href="#" className="text-white/70 hover:text-white transition">Consultaion</a>
          </nav>
        </div>
        </div>
    </div>
  </footer>;
};
