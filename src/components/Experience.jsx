import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useContext } from 'react';
import { LangContext } from "../providers/lang"

const ExperienceCard = ({ experience }) => {
  const { lang } = useContext(LangContext)

  return <VerticalTimelineElement
    contentStyle={{
      background: '#eaeaec',
      color: '#292929',
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    }}
    contentArrowStyle={{
      borderRight: '7px solid  #232631',
    }}
    date={
      <div>
        <h3 className="text-dim text-[18px] font-bold font-beckman">
          {experience.date[lang]}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <experience.icon />
    }>
    <bdi>
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {experience.title[lang]}
      </h3>
      <p
        dir={document.dir}
        className="text-taupe text-[22px] font-semibold tracking-[1px]"
        style={{ margin: 0 }}>
        {experience.company_name[lang]}
      </p>
    </bdi>
  </VerticalTimelineElement>
};

const Experience = () => {
  const { dict } = useContext(LangContext)
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          {dict.experiencesTitle}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col" dir="ltr">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: '#eaeaec',
              color: '#292929',
              boxShadow:
                'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  #232631',
            }}
            iconStyle={{ background: '#333333' }}
            icon={
              <BiDotsHorizontalRounded />
            }>

            <h3 className="text-jetLight font-bold font-beckman tracking-[2px]">
              {dict.experiencesResume}
            </h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'experiences');
