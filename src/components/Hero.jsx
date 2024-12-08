import { styles } from '../styles';
import { shaq, bwmap, worldmap } from '../assets';
import { SectionWrapper } from '../hoc';
import { useContext } from 'react';
import { LangContext } from '../providers/lang';

const Hero = () => {
  const { dict, lang } = useContext(LangContext)

  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className={`relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        ${lang == "ar" ? "sm:bg-heroReverse bg-heroMobileReverse" : "sm:bg-hero bg-heroMobile"} overflow-hidden`}>
        <div
          className={`absolute inset-0 top-[250px] 
          ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              {dict.greeting}{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
                {dict.fullname}
              </span>
            </h1>
            <bdi className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              {dict.catchphrase}
            </bdi>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div>
          <img
            className={`absolute bottom-0 hidden sm:block ${lang == "ar" ? "-scale-x-100 mr-[50vw]" : "ml-[50vw]"} h-[90vh]`}
            src={shaq}
          />
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Hero, '');
