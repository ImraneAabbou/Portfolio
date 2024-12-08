import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { LangContext } from '../providers/lang';

const About = () => {
  const { dict } = useContext(LangContext)

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>{dict.aboutTitle}</h2>
      </motion.div>

      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className="flex flex-col gap-8 mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        {dict.aboutContent}
      </motion.div>

    </div>
  );
};

export default SectionWrapper(About, 'about');
