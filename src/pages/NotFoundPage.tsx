import {useEffect} from "react";
import NotFoundComponent from "../components/FunctionalComponents/NotFoundComponent.tsx";

const NotFoundPage = () => {

  useEffect(() => {
    document.title = "ERROR 404 - Page not found";
  })

  return (
    <>
      <NotFoundComponent/>
    </>
  )
}

export default NotFoundPage;