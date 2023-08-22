"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

type Props = {};

function Hero({}: Props) {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1
            variants={textVariant(1.1)}
            className={styles.heroHeading}
            viewport={{ once: true }}
          >
            Midjourney
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            viewport={{ once: true }}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={styles.heroHeading}>Ma</h1>
            <div className={styles.heroDText} />
            <h1 className={styles.heroHeading}>Ness</h1>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          viewport={{ once: true }}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

          <Image
            src="https://cdn.midjourney.com/8f72b394-eddf-4b5e-b9d2-cebbef59c732/0_0.png"
            className="w-full h-[800px] object-cover rounded-tl-[140px] z-10 relative"
            alt="Astronaut Drowning in a Giant Aquarium"
            width={800}
            height={800}
            priority
          />

          <div className="w-full flex justify-end -mt-[50px] sm:-mt-[70px] md:-mt-[125px] lg:-mt-[200px] pr-[40px] relative z-10">
            <Link href="https://www.swynne.com" target="_blank">
              <Image
                src="https://cdn.midjourney.com/efebb487-320a-4b2c-81a8-fb5c28300583/0_0.png"
                className=" w-[150px] h-[150px] sm:w-[225px] sm:h-[225px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-contain rounded-full hover-pointer"
                alt="AI Picture of Sam Wynne"
                width={800}
                height={800}
              />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
