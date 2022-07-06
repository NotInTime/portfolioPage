import { FunctionComponent } from "react";
import Image from "next/image";
import TobiIMG from "../../../public/Tobi.jpeg";
import Container from "../container/Container";

const Hero: FunctionComponent = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col justify-center lg:grid lg:grid-cols-2 lg:grid-rows-1 gap-20 relative">
          <div className="flex-col flex justify-center">
            <div className="text-5xl font-semibold">Big Titles</div>
            <div className="text-3xl font-thin">Fitting descriptions</div>
            <div className="text-2xl font-medium">I know what YOU need.</div>
          </div>
          <div>
            <Image
              className="rounded-full"
              src={TobiIMG}
              alt="Tobi_Image"
              layout="responsive"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
