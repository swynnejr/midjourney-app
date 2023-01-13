"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid";

type Props = {};

function Navbar({}: Props) {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <MagnifyingGlassIcon className="w-[24px] h-[24px] object-contain text-white" />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          AI Generated Art
        </h2>
        <Bars3Icon className="w-[24px] h-[24px] object-contain text-white" />
      </div>
    </motion.nav>
  );
}

export default Navbar;
