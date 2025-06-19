import Footer from "../LayoutComponents/Footer.tsx";
import {Outlet} from "react-router";
import HeaderResponsiveForProducts from "@/components/LayoutComponents/HeaderResponsiveForProducts.tsx";

const RouterLayout = () => {



  return (
    <>
      <div className={"min-h-[100vh]"}>
        <HeaderResponsiveForProducts/>
        <div className="container mx-auto min-h-[95vh] pt-24">
          <Outlet/>
        </div>
        <Footer/>
      </div>

    </>
  )
}

export default RouterLayout