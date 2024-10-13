import React, { useState } from 'react';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { CgMenuMotion } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
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

        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-7 md:gap-16 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? 'text-french' : 'text-eerieBlack'
                } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
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
                    className={`${active === nav.title ? 'ms-12 text-french' : 'text-eerieBlack'
                      } font-bold font-mova text-5xl
                      uppercase cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
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
