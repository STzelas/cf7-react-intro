import HeaderResponsive from "../LayoutComponents/HeaderResponsive.tsx";
import Footer from "../LayoutComponents/Footer.tsx";
import {Outlet} from "react-router";
import ExamplesSection from "../LayoutComponents/ExamplesSection.tsx";

const RouterExamplesLayout = () => {

  return (
    <>
      <div className={"min-h-[100vh]"}>
        <HeaderResponsive/>
        <div className="container mx-auto min-h-[86vh] pt-24">
          <ExamplesSection/>
          <Outlet/>

        </div>
        <Footer/>
      </div>

    </>
  )
}

export default RouterExamplesLayout