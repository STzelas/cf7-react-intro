/**
 * Σε παλιά συστήματα απαιτείται
 * import της react
 */
// import React from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
          <div className={"min-h-[100vh]"}>
            <Header/>
            <div className="container mx-auto min-h-[95vh] pt-24">
              {children}
            </div>
            <Footer/>
          </div>

        </>
    )
}

export default Layout