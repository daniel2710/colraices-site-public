'use client'
import Image from "next/image";
import Line from "../Line"
import '@/sass/components/blog/Podcast.scss';

const Podcast = () => {
  return (
    <div className="podcast">
        <h2 className="title-podcast">Podcast</h2>
        <Line width='20' />

        <div className="podcast-content">
          <Image className="podcast-image" src={'/podcast-desktop.svg'} alt="podcast" width={200} height={200} />
          <Image className="podcast-image-desktop" src={'/podcast-desktop.svg'} alt="podcast" width={200} height={200} />
        </div>
    </div>
  )
}

export default Podcast