'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";
import { newFeatures } from "../constants";
import { PromptTips, TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

type Props = {}

function WhatIsPrompt({}: Props) {
  return (
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer as any}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
          src="https://cdn.midjourney.com/a9004522-aeb3-4110-83d7-9986fa7238dc/grid_0.png"
          alt="Mirror sphere reflecting an Alpine lake landscape"
          width={800}
          height={800}
          className="object-contain rounded-full"
          />
      </motion.div>
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Midjourney Works" textStyles="" />
        <TitleText title={<>What is a prompt?</>} textStyles="" />
        <div className="mt-3 flex flex-wrap justify-between md:justify-around gap-[24px]">
          {newFeatures.map((feature, index) => (
            <PromptTips
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>

  )
}

export default WhatIsPrompt