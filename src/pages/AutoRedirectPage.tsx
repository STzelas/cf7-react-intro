import {useEffect} from "react";
import AutoRedirect from "../components/FunctionalComponents/AutoRedirect.tsx";

const AutoRedirectPage = () => {

  useEffect(() => {
    document.title = "Auto Redirect Page";
  })

  return (
    <>
      <AutoRedirect/>
    </>
  )
}

export default AutoRedirectPage