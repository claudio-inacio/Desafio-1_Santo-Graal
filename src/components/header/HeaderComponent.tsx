
import logo1 from "../../images/logo-jujutsu-removebg.png"
import ImageLogo from "./ImageLogo"
import MenuButton from "./MenuButton"

export default function Header() {
  return (
    <header className="flex items-center md:justify-center justify-around px-4 h-16 bg-black">
      <MenuButton />
      <ImageLogo logo={logo1} />
    </header>
  )
}
