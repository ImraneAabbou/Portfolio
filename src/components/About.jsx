import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
//import { services } from '../constants';

//const ServiceCard = ({ index, title, icon }) => {
//  return (
//    <motion.div
//      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
//      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
//      <div
//        options={{
//          max: 45,
//          scale: 1,
//          speed: 450,
//        }}
//        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
//        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
//        <h3 className="text-taupe text-[18px] font-bold text-center">
//          {title}
//        </h3>
//      </div>
//    </motion.div>
//  );
//};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        I’m a Full Stack Developer with a passion for creating web applications that seamlessly blend functionality and design. Whether working on the front-end or back-end, I enjoy building <strong className='font-bold'>efficient</strong>, <strong className='font-bold'>user-friendly</strong> solutions.
      </motion.p>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">

        I work with advanced technologies to create <strong className='font-bold'>clean</strong>, <strong className='font-bold'>scalable</strong>, and <strong className='font-bold'>maintainable</strong> code. When the solution isn’t obvious, I excel at <strong className='font-bold'>finding the right approach</strong> and making <strong className='font-bold'>thoughtful decisions</strong> to ensure the best outcome.

      </motion.p>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        I’m always pushing to learn more and improve with every challenge, aiming to deliver work that stands out both in <strong className='font-bold'>performance</strong> and <strong className='font-bold'>experience</strong>.
      </motion.p>

    </div>
  );
};

export default SectionWrapper(About, 'about');
