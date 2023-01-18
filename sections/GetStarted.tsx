"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";
import { startingFeatures } from "../constants";
import { StartSteps, TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

type Props = {};

function GetStarted({}: Props) {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants("left")}
          viewport={{ once: true }}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <Image
            src="https://cdn.midjourney.com/c43b66a9-9041-4c8f-91cd-9f659c07e0b6/grid_0.png"
            alt="Glass sphere with a landscape inside"
            width={800}
            height={800}
            className="object-contain rounded-full"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          viewport={{ once: true }}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| How Midjourney Works" textStyles="" />
          <TitleText
            title={<>Get started with just a few clicks</>}
            textStyles=""
          />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps
                key={feature}
                number={`${index < 10 ? "0" : ""} ${index + 1}`}
                text={feature}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default GetStarted;
