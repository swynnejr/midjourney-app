'use client'

import { CubeTransparentIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import styles from '../styles';

type Props = {
  title: string,
  subtitle: string
}

export default function PromptTips({ title, subtitle }: Props) {
  return (
    <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <CubeTransparentIcon
      className="w-1/2 h-1/2 object-contain text-white" 
      />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
  )
}