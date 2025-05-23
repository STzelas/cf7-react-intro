/**
 * Σε παλιά συστήματα απαιτείται
 * import της react
 */
// import React from "react";
import Header from "./Header.tsx";

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
          <Header/>
          {children}
        </>
    )
}

export default Layout