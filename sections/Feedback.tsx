"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

type Props = {};

function Feedback({}: Props) {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        >
          <div className="feedback-gradient" />
          <div>
          <motion.div
            variants={zoomIn(0.4, 1)}
            className="block lg:hidden absolute right-[5%] -top-[5%] sm:-top-[20%]"
          >
            <Link href="https://www.swynne.com" target="_blank">
              <Image
                src="https://cdn.midjourney.com/efebb487-320a-4b2c-81a8-fb5c28300583/grid_0.png"
                className="w-[120px] h-[120px] sm:w-[155px] sm:h-[155px] object-contain rounded-full hover-pointer"
                alt="AI Picture of Sam Wynne"
                width={500}
                height={500}
              />
            </Link>
          </motion.div>

            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
              Sam Wynne
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
              Creator | Midjourney Madness
            </p>
          </div>
          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
            “With the increased access to AI technology, Midjourney can very
            useful for 10x-ing productivity in many design oriented professions.
            If you pair it with with language models like GPT-3 and Codex, a
            single person can move mountains.”
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <Image
            src="https://cdn.midjourney.com/5135d15b-b4b8-4d34-95da-a423f1c9b9d7/grid_0.png"
            alt="A brightly colored phoenix"
            className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
            width={800}
            height={800}
          />

          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[5%] bottom-[3%]"
          >
            <Link href="https://www.swynne.com" target="_blank">
              <Image
                src="https://cdn.midjourney.com/efebb487-320a-4b2c-81a8-fb5c28300583/grid_0.png"
                className="w-[155px] h-[155px] xl:w-[200px] xl:h-[200px] object-contain rounded-full hover-pointer"
                alt="AI Picture of Sam Wynne"
                width={300}
                height={300}
              />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Feedback;
