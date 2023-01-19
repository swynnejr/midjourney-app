"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { Menu } from "./Menu/Menu";

type Props = {};

function Navbar({}: Props) {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${styles.xPaddings} py-8 relative z-100`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <div className="relative z-50">
          <Menu />
        </div>
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          AI Generated Art
        </h2>
        <MagnifyingGlassIcon className="w-[24px] h-[24px] object-contain text-white" />
        {/* <Bars3Icon className="w-[24px] h-[24px] object-contain text-white" /> */}
      </div>
    </motion.div>
  );
}

export default Navbar;
