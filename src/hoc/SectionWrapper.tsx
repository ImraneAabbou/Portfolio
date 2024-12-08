import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';
import { ReactNode, useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import { useNavigate } from "react-router-dom"

function SectionObserver({ children, sectionName = "" }: { children: ReactNode, sectionName?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: .5 })
  const navigate = useNavigate()

  useEffect(() => {
    if (!inView) return
    navigate(sectionName ? `#${sectionName}` : "")

    console.log("navigating to : ", sectionName)
  }, [inView])

  return <div ref={ref}>{children}</div>
}


const SectionWrapper = (Component, sectionName) => {
  function HOC() {
    return <SectionObserver sectionName={sectionName}>
      {
        sectionName
          ? <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.padding} container mx-auto relative z-0`}>
            <span className="hash-span" id={sectionName}>
              &nbsp;
            </span>
            <Component />
          </motion.section>
          : <Component />
      }
    </SectionObserver>
  }

  return HOC;
};

export default SectionWrapper;
