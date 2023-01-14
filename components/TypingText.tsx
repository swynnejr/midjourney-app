'use client'

import { motion } from "framer-motion"
import { textContainer, textVariant2 } from "../utils/motion"

type Props = {
  title: string,
  textStyles: string,
}

export default function TypingText({ title, textStyles }: Props) {
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
    >
      {Array.from(title).map((letter, i) => (
        <motion.span variants={textVariant2} key={i} >
          {letter === ' ' ? '\u00A0' : letter }
        </motion.span>
      ))}
    </motion.p>
  )
}