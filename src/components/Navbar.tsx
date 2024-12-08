import React, { useContext, useEffect, useState } from 'react';
import { styles } from '../styles';
import { langs, navLinks } from '../constants';
import { CgMenuMotion } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import { LangContext } from '../providers/lang';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");
  const { hash } = useLocation()
  const { lang, setLang, dict } = useContext(LangContext)

  useEffect(() => {
    console.log("hash is", hash.slice(1))
    setActive(hash.slice(1))
  }, [hash])

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="/"
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>

          <div className="flex flex-col font-mova tracking-wider text-eerieBlack uppercase my-4">
            <div className="text-2xl tracking-widest">IMRANE</div>
            <div className="text-sm text-battleGray font-semibold flex justify-between">
              {
                "AABBOU".split("")
                  .map((c, i) => <span key={i}>{c}</span>)
              }
            </div>
          </div>

        </a>
        <ul className="list-none hidden md:flex flex-row gap-8 mt-2">
          <li
            className={`${active === "about" ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}>
            <a href={`/#about`}>{dict.about}</a>
          </li>
          <li
            className={`${active === "projects" ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}>
            <a href={`/#projects`}>{dict.projects}</a>
          </li>
          <li
            className={`${active === "experiences" ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}>
            <a href={`/#experiences`}>{dict.experiences}</a>
          </li>
          <li
            className={`${active === "contact" ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}>
            <a href={`/#contact`}>{dict.contact}</a>
          </li>
          <li className='flex gap-2'>
            <span className="text-french">|</span>
            <select defaultValue={lang} onChange={e => setLang(e.currentTarget.value)} className='font-medium font-mova uppercase tracking-[3px] bg-transparent text-eerieBlack w-12 cursor-pointer'>
              {langs.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </li>
        </ul>

        {/* mobile */}
        <div className="md:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10
                }`}>
              <div className="flex justify-end text-black mt-3">
                <button onClick={() => setToggle(!toggle)}>
                  <MdOutlineClose size={32} />
                </button>
              </div>
              <ul
                className="list-none flex flex-col gap-16
                items-start justify-end mt-[10rem] w-fit mx-auto">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${active === nav.id ? 'ms-12 text-french' : 'text-eerieBlack'
                      } font-bold font-mova text-5xl
                      uppercase cursor-pointer`}
                    onClick={() => setToggle(!toggle)}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <button onClick={() => setToggle(!toggle)}>
              <CgMenuMotion className='text-black' size={32} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;