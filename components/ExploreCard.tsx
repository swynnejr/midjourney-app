'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { WorldID } from "../typings";
import { fadeIn } from "../utils/motion";
import { GlobeAltIcon } from "@heroicons/react/24/solid";


type Props = {
  // key: number | string,
  index: number,
  activeWorld: string | undefined,
  handleClick: any,
  id: WorldID;
  imgUrl: string;
  title: string;


}

export default function ExploreCard({ index, activeWorld, handleClick, id, imgUrl, title }: Props) {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      viewport={{ once: true }}
      className={`relative ${activeWorld === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt={title}
        width={800}
        height={800}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {activeWorld !== id ? (
        <h3 className="font-semibold text-[18px] sm:text-[26px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div className={`${styles.flexCenter} w-[60px] h-[60px] glassmorphism mb-[16px] rounded-[24px]`}>
            <GlobeAltIcon className="w-1/2 h-1/2 object-contain text-white"/>
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          Explore
        </p>
        <h2 className="mt-[24px] font-semibold text-[24px] sm:text-[32px] text-white">
          {title}
        </h2>
        </div>
      )}
      
    </motion.div>
  )
}