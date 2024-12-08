import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { useContext } from 'react';
import { LangContext } from "../providers/lang"

const Tech = () => {
  const { dict } = useContext(LangContext)
  return (
    <div className={`${styles.padding} container mx-auto`}>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadTextLight}>{dict.technologiesTitle}</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name} title={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
