import {useEffect} from "react";
import AutoRedirect from "../components/AutoRedirect.tsx";

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