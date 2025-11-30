import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col min-w-screen min-h-screen items-center justify-center text-center gap-10 px-2.5 md:px-7">
      <div className=" flex items-center justify-center gap-1 md:gap-4">
        <div className="ml-8 md:mr-0 w-16 h-px bg-black" />
        <span className="text-[0.6rem] md:text-xs tracking-[0.4em] uppercase text-muted-foreground">
          Since Lower Paleolithic
        </span>
        <div className="mr-8 md:mr-0 w-16 h-px bg-black" />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl">
          The Art of Traditional Home Cooking
        </h1>
      </div>
      <div className="flex flex-row justify-between gap-7 pt-5">
        <button className="px-4 py-2 bg-black text-white rounded-2xl">
          Explore recipes
        </button>
        <button className="px-4 py-2 bg-black text-white rounded-2xl">
          The story
        </button>
      </div>
    </section>
  );
};

export default Hero;
