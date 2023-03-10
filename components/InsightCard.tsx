"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import { fadeIn } from "../utils/motion";

type Props = {
  index: number;
  title: string;
  imgUrl: string;
  subtitle: string;
};

const InsightCard = ({ imgUrl, title, subtitle, index }: Props) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    viewport={{ once: true }}
    className="flex md:flex-row flex-col gap-4"
  >
    <Image
      src={imgUrl}
      alt={title}
      width={500}
      height={500}
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div className="lg:flex hidden items-center justify-center w-[80px] h-[80px] rounded-full bg-transparent border-[1px] border-white">
        <ArrowUpRightIcon className="text-white w-[40%] h-[40%] object-contain"/>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
