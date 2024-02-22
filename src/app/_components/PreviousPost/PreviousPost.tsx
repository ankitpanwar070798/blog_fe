import React from "react"
import Blogcard from "../BlogCard/BlogCard"

const PreviousPost = () => {
  return (
    <div className="max-w-[1360px] mx-auto mt-4 mb-10 lg:px-8 px-6">
      <small className="text-lg text-[#42C690] font-bold uppercase">
        Previous posts
      </small>
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

export default PreviousPost
