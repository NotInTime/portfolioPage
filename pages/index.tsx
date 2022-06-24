import type { NextPage } from "next";
import Hero from "../src/components/Hero/Hero";
import Navbar from "../src/components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-16">
        <Hero />
      </div>
    </>
  );
};

export default Home;
