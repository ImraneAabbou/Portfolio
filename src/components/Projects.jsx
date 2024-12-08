import React, { useContext, useState } from 'react';
import { BiShow } from "react-icons/bi";
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { FaGithub } from "react-icons/fa";
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { LangContext } from "../providers/lang"

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  const { lang } = useContext(LangContext)

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'group cursor-pointer lg:flex-[0.5] flex-[2]'
        } flex items-center justify-center min-w-[170px] w-full transition-[flex] duration-500 overflow-hidden
      h-[420px] card-shadow`}
      onClick={() => handleClick(id)}>
      <div
        className={`absolute top-0 left-0 z-10 bg-jetLight transition-opacity duration-500
      h-full w-full rounded-[24px] ${(active === id ? "opacity-10" : "opacity-75")}`} />

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {active !== id ? (
        <div className="bg-red-400 flex items-center start-1 justify-start pe-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf opacity-50 group-hover:opacity-100 transition group-hover:scale-125 group-hover:start-x-2.5 tracking-[1px]
        absolute z-20 lg:-rotate-90
        leading-none">
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(122,122,122,.75)] rounded-b-[24px] z-20">
            {
              !repo
                ? null
                : <div className="absolute inset-0 flex justify-end m-3">
                  <a
                    href={repo}
                    target="_blank"
                    className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8]">
                    <FaGithub size={24} />
                  </a>
                </div>
            }

            <h2
              className="font-bold sm:text-[32px] text-[24px] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
              {name}
            </h2>
            <p
              className="text-silver sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]">
              {description[lang]}
            </p>
            {
              !demo
                ? null
                : <a
                  className="flex justify-between 
              sm:text-[16px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-2 pr-3 
              whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
              w-[125px] h-[46px] rounded-[10px] glassmorphism 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
                  target='_blank'
                  href={demo}
                >
                  <BiShow size={24} />
                  LIVE DEMO
                </a>
            }
          </div>
        </>
      )
      }
    </motion.div >
  );
};

const Projects = () => {
  const [active, setActive] = useState(projects[0].id);
  const { dict } = useContext(LangContext)

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadTextLight}`}>{dict.projectsTitle}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] leading-[30px]">
          {dict.projectsContent}
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
