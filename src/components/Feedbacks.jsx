import { useState } from 'react';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';

import sertifikat1 from '../assets/sertifikat/sertifikat1.png';
import sertifikat2 from '../assets/sertifikat/sertifikat2.png';
import sertifikat3 from '../assets/sertifikat/sertifikat3.png';

const Certificate = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const images = [sertifikat1, sertifikat2, sertifikat3];

  const handleDotClick = (index) => {
    setCurrentSlide(index + 1);
    document.getElementById(`slide${index + 1}`).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial={{ color: 'yellow' }}
        animate={{ color: 'white' }}
      >
        <h2 className={styles.sectionHeadText}>Certificate.</h2>
      </motion.div>

      <div className="w-full flex h-full justify-center shadow-xl">
        <motion.div
          variants={fadeIn('', '', 0.1, 1)}
          className="text-white shadow-md shadow-stone-600 sm:h-[435px] h-[250px] leading-[30px]
          flex justify-center items-center mt-10 sm:w-[700px] w-full"
        >
          <div className="carousel w-full h-full">
            {images.map((image, index) => (
              <div
                key={index}
                id={`slide${index + 1}`}
                className={`carousel-item relative w-full h-full ${currentSlide === index + 1 ? '' : 'hidden'}`}
              >
                <img src={image} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href={`#slide${(index - 1 + images.length) % images.length + 1}`}
                    className="btn btn-circle opacity-40"
                    onClick={() => setCurrentSlide((index - 1 + images.length) % images.length + 1)}
                  >
                    ❮
                  </a>
                  <a
                    href={`#slide${(index + 1) % images.length + 1}`}
                    className="btn btn-circle opacity-40"
                    onClick={() => setCurrentSlide((index + 1) % images.length + 1)}
                  >
                    ❯
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${currentSlide === index + 1 ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificate, 'Certificate');
