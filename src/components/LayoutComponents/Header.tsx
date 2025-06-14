import CodingFactoryLogo from "../FunctionalComponents/CodingFactoryLogo.tsx";
import {Link} from "react-router";

const Header = () => {
  return (
    <>
      <header className={"bg-[#782024] fixed w-full"}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <CodingFactoryLogo/>
          <nav className="flex items-center justify-between gap-8">
            {/*<a className={"text-white hover:underline hover:underline-offset-4"} href="/">Home</a>*/}
            <Link to="/" className={"text-white hover:underline hover:underline-offset-4"} >Home</Link>
            <Link to="/examples/name-changer" className={"text-white hover:underline hover:underline-offset-4"} >Name Changer App</Link>
            <Link to="/examples/online-status" className={"text-white hover:underline hover:underline-offset-4"} >Online Status App</Link>
          </nav>

        </div>
      </header>
    </>
  )
}

export default Header