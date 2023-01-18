"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";
import { PromptTips, TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn } from "../utils/motion";

type Props = {};

function World({}: Props) {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText
          title="| Creators around the world"
          textStyles="text-center"
        />
        <TitleText
          title={
            <>Follow your friends or discover creators from across the globe</>
          }
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          {/* To Do: Extract these images into a separate file, or try to animate the pins being dropped on the map */}
          <Image
            src="https://cdn.midjourney.com/7001fe76-893f-485c-b440-0bb77f0fd954/grid_0.png"
            className="w-full h-full object-cover"
            alt="Furistic map of Earth"
            width={1800}
            height={1800}
          />
          <motion.div
            className="absolute bottom-[25%] right-[25%] w-[70px] h-[70px] p-[6px] invisible md:visible rounded-full bg-[#9215ff5e]"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 5.5,
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 50,
                restDelta: 0.001,
              },
            }}
          >
            <Image
              src="https://cdn.midjourney.com/a73393bc-704f-4964-b660-d1281dc50001/grid_0.png"
              className="w-full h-full rounded-full"
              alt="Teen boy in Australia"
              width={500}
              height={500}
            />
          </motion.div>
          <motion.div
            className="absolute top-[40%] left-[55%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#40ff405f]"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 4.5,
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 50,
                restDelta: 0.001,
              },
            }}
          >
            <Image
              src="https://cdn.midjourney.com/70d51892-6714-47fa-90fc-0f2df6c8c019/grid_0.png"
              className="w-full h-full rounded-full"
              alt="Gnome avatar in Africa"
              width={500}
              height={500}
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 3.5,
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 50,
                restDelta: 0.001,
              },
            }}
            className="absolute top-[15%] left-[50%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#f940ff5f]"
          >
            <Image
              src="https://cdn.midjourney.com/3627f5a3-2230-409b-b391-f51ee3ae1afb/grid_0.png"
              className="w-full h-full rounded-full"
              alt="Punk Avatar over Europe"
              width={500}
              height={500}
            />
          </motion.div>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 5,
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 4,
                stiffness: 50,
                restDelta: 0.001,
              },
            }}
            className="absolute top-1/2 left-[40%] w-[70px] h-[70px] p-[6px] invisible md:visible rounded-full bg-[#ff9f0e6f]"
          >
            <Image
              src="https://cdn.midjourney.com/25aa5ce9-888a-4342-8a41-5e9196d14d0a/grid_0.png"
              className="w-full h-full rounded-full"
              alt="Pretty woman in Brazil"
              width={500}
              height={500}
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 4,
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 50,
                restDelta: 0.001,
              },
            }}
            className="absolute top-1/4 left-[25%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#0ef7ff6f]"
          >
            <Image
              src="https://cdn.midjourney.com/eb8f4c7c-d08b-48e3-99ce-dde42c9cd57a/grid_0.png"
              className="w-full h-full rounded-full"
              alt="Neon young woman in California"
              width={500}
              height={500}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default World;
