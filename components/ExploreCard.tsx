'use client'

type Props = {
  key: number | string,
  index: number,
  activeWorld: string | undefined,
  handleClick: void,

}

export default function ExploreCard({ key, index, activeWorld, handleClick}: Props) {
  return (
    <div>ExploreCard</div>
  )
}