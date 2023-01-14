'use client'

import { motion } from "framer-motion"
import { textContainer, textVariant2 } from "../utils/motion"

type Props = {
  title: React.ReactNode,
  textStyles: string,
}

export default function TitleText({ title, textStyles}: Props) {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold text-[40px] md:text-[64px] text-white ${textStyles}`}
    >{title}</motion.h2>
  )
}