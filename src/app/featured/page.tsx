import React from "react"
import Blogcard from "../_components/BlogCard/BlogCard"

const page = () => {
  return (
    <div className="max-w-[1360px] mx-auto mt-4 mb-6 px-4 lg:px-8">
      <div className="text-center mt-4 mb-6">
        <h1 className="text-[32px] lg:text-[52px] font-bold mt-4 ">
          Editor’s Choice
        </h1>
        <p className="text-[18px] lg:text-[24px] font-light mb-6">
          A curated list of the most interesting thoughts, stories and ideas
        </p>
      </div>

      <div>
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
