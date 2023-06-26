import Link from "next/link"
import Footer from "./ui/(main)/footer"
import FirstContent from "./ui/(main)/firstContent"
import SecondContent from "./ui/(main)/secondContent"
import ThirdContent from "./ui/(main)/thirdContent"

// const dum = {
//   list: ["single", "pair"],
//   link: ["/single", "/pair"],
// }

// {dum.list.map((item, index) => (
//   <div key={item}>
//     <Link href={dum.link[index]}>{item}</Link>
//   </div>
// ))}

const Home = () => {
  return (
    <>
      <FirstContent />
      <SecondContent />
      <ThirdContent />
      <Footer />
    </>
  )
}

export default Home
