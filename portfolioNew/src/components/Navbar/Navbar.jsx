import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useTheme } from "../../context/themeContext";
import { m } from "framer-motion";
import CustomNavLink from "./CustomNavLink";
import Animation from "../Animation";

function Navbar({ links=[], className, animation, id }) {
  
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if(pathname === '/resume') return null;

  return (
    <Animation>
    <m.div
      id="navbar"
      className={`transition-all flex gap-3 md:gap-4 p-2 px-4 items-center justify-evenly rounded-2xl bg-white/80 text-black backdrop-blur-lg shadow-xl text-sm md:text-base max-w-[90vw] ${className} overflow-x-auto no-scrollbar`}
      {...animation}
    >
      {links.map((link) => (
        <CustomNavLink link={link} isActive={link?.query === query || pathname === link.path} motionDivId={id} />
      ))}
    </m.div>
    </Animation>
  );
}

export default Navbar;
