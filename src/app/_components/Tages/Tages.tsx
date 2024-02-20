import Image from "next/image"
import React from "react"
import img1 from "../../../public/assets/img1.jpeg"
import img2 from "../../../public/assets/img2.jpeg"
import img3 from "../../../public/assets/img3.jpeg"
import img4 from "../../../public/assets/img4.jpeg"
import img5 from "../../../public/assets/img5.jpeg"
import img6 from "../../../public/assets/img6.jpg"
import img7 from "../../../public/assets/img7.jpg"
import Link from "next/link"

const Tages = () => {
  const data = [
    {
      id: 1,
      name: "Idea",
      img: img1,
    },
    {
      id: 2,
      name: "LifeStyle",
      img: img2,
    },
    {
      id: 3,
      name: "Design",
      img: img3,
    },
    {
      id: 4,
      name: "Health",
      img: img4,
    },
    {
      id: 5,
      name: "Interior",
      img: img5,
    },
    {
      id: 6,
      name: "Eco",
      img: img6,
    },
    {
      id: 7,
      name: "Review",
      img: img7,
    },
  ]
  return (
    <div className="max-w-[1360px] mx-auto mt-8 mb-10 px-8">
      <small className="text-xl uppercase">Popular tags</small>
      <div className="flex gap-6 overflow-x-scroll overflow-y-hidden">
        {data.map((tag) => (
          <Link
            key={tag.id}
            href={`/tag/${tag.name.toLowerCase()}/`}
            className="relative py-4 hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          >
            <h2 className="absolute bottom-6 left-2 bg-white px-3 py-1 rounded-[100px] text-xs">
              {tag.name}
            </h2>
            <div className="w-[200px]  h-[110px]">
              <Image
                src={tag.img}
                alt={tag.name}
                className="h-full rounded-md"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Tages
