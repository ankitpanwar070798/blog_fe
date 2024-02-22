import Blogcard from "@/app/_components/BlogCard/BlogCard"
import Image from "next/image"
import React from "react"
import img from "../../../../public/assets/img7.jpg"

const page = () => {
  return (
    <div className="max-w-[1360px] mx-auto mt-4 mb-6 px-4 lg:px-8">
      <div className="text-center mt-4 mb-6">
        <div className="flex justify-center items-center w-[80px] h-[80px] lg:w-[160px] lg:h-[160px] bg-[#42C690] rounded-[100%] m-auto">
          <div className="h-auto w-auto">
            <Image
              src={img}
              alt="img"
              loading="lazy"
              className="lg:h-[130px] lg:w-[130px] h-[60px] w-[60px] rounded-[100%]"
            />
          </div>
        </div>
        <h1 className="text-[32px] lg:text-[52px] font-bold mt-4 ">Tag</h1>
        <p className="text-[18px] lg:text-[24px] font-light mb-6">
          A curated list of the most interesting thoughts, stories and ideas
        </p>
      </div>

      <div>
        <small className="text-sm uppercase">10 posts</small>
        <Blogcard />
      </div>
      <div className="text-center bg-[#42C690] text-white m-auto py-4 px-6 rounded-[100px]  w-fit hover:underline underline-offset-2 mt-10 mb-6">
        <a href="featured/" className="text-lg">
          Load More
        </a>
      </div>
    </div>
  )
}

export default page
