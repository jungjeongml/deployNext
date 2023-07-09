import Footer from "./ui/(main)/footer"
import FirstContent from "./ui/(main)/firstContent"
import SecondContent from "./ui/(main)/secondContent"
import "./globals.css"
import BoundaryLine from "./ui/(main)/boundaryLine"

const Home = () => {
  return (
    <>
      <FirstContent />
      <BoundaryLine />
      <SecondContent />
      <Footer />
    </>
  )
}

export default Home
