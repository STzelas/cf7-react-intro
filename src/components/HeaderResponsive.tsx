import CodingFactoryLogo from "./CodingFactoryLogo.tsx";
import {useState} from "react";
import {Menu, X} from "lucide-react";
import {Link} from "react-router";

const HeaderResponsive = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={"bg-[#782024] fixed w-full"}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <CodingFactoryLogo/>

          <nav
            // className="flex items-center justify-between gap-8"
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex bg-cf-dark-red text-white gap-8 absolute top-24 left-0 w-full md:w-auto md:static md:p-0`}
          >
            {/*<a className={"text-white hover:underline hover:underline-offset-4"} href="/">Home</a>*/}
            <Link
              to="/"
              className={"block md-inline hover:underline hover:underline-offset-4 text-center p-2"}
              onClick={() => {setMenuOpen(false)}}
            >Home
            </Link>
            <Link
              to="/examples/name-changer"
              className={"block md-inline hover:underline hover:underline-offset-4 text-center p-2"}
              onClick={() => {setMenuOpen(false)}}
            >
              Name Changer App
            </Link>
            <Link
              to="/examples/online-status"
              className={"block md-inline hover:underline hover:underline-offset-4 text-center p-2"}
              onClick={() => {setMenuOpen(false)}}
            >
              Online Status App
            </Link>
          </nav>

          <button
            className="text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            { menuOpen ? <X size={36}/> : <Menu size={36}/> }
          </button>

        </div>
      </header>
    </>
  )
}

export default HeaderResponsive