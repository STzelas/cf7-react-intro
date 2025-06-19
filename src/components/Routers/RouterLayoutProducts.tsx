import Footer from "../LayoutComponents/Footer.tsx";
import {Outlet} from "react-router";
import HeaderResponsiveForProducts from "@/components/LayoutComponents/HeaderResponsiveForProducts.tsx";
import { Toaster } from "sonner";

const RouterLayout = () => {



  return (
    <>
      <div className={"min-h-[100vh]"}>
        <HeaderResponsiveForProducts/>
        <div className="container mx-auto min-h-[95vh] pt-24">
          <Outlet/>
        </div>
        <Footer/>
        <Toaster/>
      </div>

    </>
  )
}

export default RouterLayout