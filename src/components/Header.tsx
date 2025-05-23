import CodingFactoryLogo from "./CodingFactoryLogo.tsx";

const Header = () => {
  return (
    <>
      <header className={"bg-[#782024]"}>
        <div className="container mx-auto flex items-center justify-between">
          <CodingFactoryLogo/>
          <a href="/">Home</a>
        </div>
      </header>
    </>
  )
}

export default Header