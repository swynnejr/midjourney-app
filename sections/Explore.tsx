'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import Image from "next/image";
import Link from "next/link";
import { fadeIn, staggerContainer } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { WorldID, IExploreWorlds, SetActiveWorldID } from "../typings";


type Props = {
  exploreWorlds: IExploreWorlds[],
  // activeWorld: WorldID,
}

function Explore({exploreWorlds}: Props) {
  const [activeWorld, setActiveWorld] = useState<WorldID | undefined>('world-2')

  return (
    <section className={`${styles.paddings}`} id="explore" >
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText title={<>Choose the world you want <br className="md:block hidden"/> to explore</>} textStyles="text-center" />
        <div className="mt-[50px] flex flex-col lg:flex-row min-h-[70vh] gap-5" >
          {exploreWorlds.map((world, i) => (
            <ExploreCard 
              key={world.id}
              {...world}
              index={i}
              activeWorld={activeWorld}
              handleClick={setActiveWorld as any}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Explore