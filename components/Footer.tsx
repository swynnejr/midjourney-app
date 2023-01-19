'use client'

import { RocketLaunchIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import { SocialIcon } from "react-social-icons"
import { socials } from "../constants"
import styles from "../styles"
import { footerVariants } from "../utils/motion"

type Props = {}

function Footer({}: Props) {
  return (
    <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Explore Midjourney Images
        </h4>
        <div className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <RocketLaunchIcon className="text-white w-[24px] h-[24px] object-contain" />
          <span className="font-normal text-[16px] text-white">
            See what is out there...
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            MIDJOURNEY MADNESS
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 Midjourney Madness. All rights reserved.
          </p>

          <div className="flex justify-around">
          {socials.map((social) => (
            <SocialIcon
              key={social.title}
              url={social.url}
              target="_blank"
              rel="noopener noreferrer"
              fgColor="gray"
              bgColor="transparent"
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
  )
}

export default Footer