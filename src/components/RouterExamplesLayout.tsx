import HeaderResponsive from "./HeaderResponsive.tsx";
import Footer from "./Footer.tsx";
import {Outlet} from "react-router";
import ExamplesSection from "./ExamplesSection.tsx";

const RouterExamplesLayout = () => {

  return (
    <>
      <div className={"min-h-[100vh]"}>
        <HeaderResponsive/>
        <div className="container mx-auto min-h-[86vh] pt-24">
          <Outlet/>
        </div>
        <ExamplesSection/>
        <Footer/>
      </div>

    </>
  )
}

export default RouterExamplesLayout