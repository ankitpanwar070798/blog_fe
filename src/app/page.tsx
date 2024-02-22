import FeaturedPost from "@/app/_components/FeaturedPost/FeaturedPost"
import HeroSection from "@/app/_components/HeroSection/HeroSection"
import Tages from "@/app/_components/Tages/Tages"
import PreviousPost from "./_components/PreviousPost/PreviousPost"
import SimilarPost from "./_components/SimilarPost/SimilarPost"
import WhatsNew from "./_components/whatsNew/whatsnew"


export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <Tages /> */}
      <WhatsNew/>
      <FeaturedPost />
      <PreviousPost />
      <SimilarPost />
      
    </>
  )
}
