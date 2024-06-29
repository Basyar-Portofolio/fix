import {motion} from "framer-motion";
import { styles } from "../styles";
import { Photo } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className=" container mx-auto h-full">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] xl:top-[150px] max-w-7xl mx-auto flex flex-col
          justify-between xl:flex-row items-center xl:items-start`}
        >
          {/*TEXT*/} 
          <div className=" mt-6 items-center text-center xl:text-left order-2 xl:order-none mb-48">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#6076f1]">Basyar</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Payroll Officer,
              <br /> User Excel and HRIS Application
            </p>
          </div>

          {/*IMAGE*/}
          <div className="order-1 xl:order-none xl:mb-8 mb-0">
            <Photo />
          </div>
        </div>
      </div>
    <div className=" absolute xs:bottom-10 bottom-[65px]
    w-full flex justify-center items-center">
      <a href="#about">
        <div className="w-[28px] h-[48px] rounded-3xl
        border-4 border-blue-950 flex justify-center
        items-start p-2">
          <motion.div
          animate={{
            y: [0, 24, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="w-3 h-2 rounded-full
          bg-secondary mb-1"
          />
        </div>
      </a>
    </div>
    </section>
  );
};

export default Hero;
