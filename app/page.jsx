import FirstInfo from "@/components/FirstInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LatestArticles from "@/components/LatestArticles";
import SecondInfo from "@/components/SecondInfo";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center w-screen bg-white z-20">
        <Header />
      </div>
      <FirstInfo />
      <SecondInfo />
      <LatestArticles />
      <Footer />
    </div>
  )
}
