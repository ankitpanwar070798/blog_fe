import FeaturedPost from "@/app/_components/FeaturedPost/FeaturedPost"
import HeroSection from "@/app/_components/HeroSection/HeroSection"
import Tages from "@/app/_components/Tages/Tages"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Tages />
      <FeaturedPost />
    </>
  )
}
