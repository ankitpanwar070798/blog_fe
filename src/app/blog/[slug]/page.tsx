import SimilarPost from "@/app/_components/SimilarPost/SimilarPost"
import { Metadata } from "next"
import React from "react"
import BlogImage from "../../../../public/assets/img4.jpeg"
import Image from "next/image"
import ProgressBar from "@/app/_components/ProgressBar/ProgressBar"

interface BlogPostPageProps {
  params: { id: string }
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
  }
}

const page = () => {
  return (
    <div className="max-w-[1360px] mx-auto mt-4 mb-6 px-4 lg:px-8">
      <ProgressBar />
      <div className="max-w-[800px] mx-auto mt-4 mb-6 px-4 lg:px-8">
        <p
          className={
            "text-2xl lg:text-[42px] font-medium text-start my-4 lg:my-10 leading-10"
          }
        >
          Dynamic Routing and Static Generation
        </p>
        <Image
          src={BlogImage}
          alt={"blog"}
          className="w-[100%] h-[200px] md:h-[400px] lg:h-[500px] rounded-xl my-4"
        />
      </div>
      <div className={"max-w-[800px] mx-auto mt-4 mb-6 px-4 lg:px-8"}>
        <div className={"flex gap-4 my-8"}>
          <Image
            src={BlogImage}
            alt={"alt"}
            width={40}
            height={40}
            className="rounded-xl"
          />
          <div className="flex flex-col justify-end ">
            <p className="text-[12px]">JJ Kasper</p>
            <p className="text-[12px]">March 16, 2020</p>
          </div>
        </div>
        <div>
          <p className="text-[16px] lg:text-[20px] font-light leading:6 lg:leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent
            elementum facilisis leo vel fringilla est ullamcorper eget. At
            imperdiet dui accumsan sit amet nulla facilities morbi tempus.
            Praesent elementum facilisis leo vel fringilla. Congue mauris
            rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra
            massa massa ultricies.
          </p>
          <p className="text-[16px] lg:text-[20px] font-light leading:6 lg:leading-8">
            Venenatis cras sed felis eget velit. Consectetur libero id faucibus
            nisl tincidunt. Gravida in fermentum et sollicitudin ac orci
            phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi
            vitae. Id aliquet risus feugiat in ante metus dictum at tempor. Sed
            blandit libero volutpat sed cras. Sed odio morbi quis commodo odio
            aenean sed adipiscing. Velit euismod in pellentesque massa placerat.
            Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi
            lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed.
            Luctus accumsan tortor posuere ac ut consequat semper viverra.
            Fringilla ut morbi tincidunt augue interdum velit euismod.
          </p>
          <p className="text-[16px] lg:text-[20px] font-light leading:6 lg:leading-8">
            Tristique senectus et netus et malesuada fames ac turpis. Ridiculous
            mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis
            nunc sed id semper. Egestas tellus rutrum tellus pellentesque.
            Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis
            blandit turpis cursus in hac habitasse platea dictumst quisque. Eros
            donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor
            consequat id porta nibh. Adipiscing elit duis tristique sollicitudin
            nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut
            tellus elementum sagittis vitae et leo. Arcu non odio euismod
            lacinia at quis risus sed vulputate.
          </p>
        </div>
      </div>
      <SimilarPost />
    </div>
  )
}

export default page
