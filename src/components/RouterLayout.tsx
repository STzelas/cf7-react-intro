import HeaderResponsive from "./HeaderResponsive.tsx";
import Footer from "./Footer.tsx";
import {Outlet} from "react-router";

const RouterLayout = () => {



  return (
    <>
      <div className={"min-h-[100vh]"}>
        <HeaderResponsive/>
        <div className="container mx-auto min-h-[95vh] pt-24">
          <Outlet/>
        </div>
        <Footer/>
      </div>

    </>
  )
}

export default RouterLayout