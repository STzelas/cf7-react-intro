import {useEffect} from "react";
import NotFoundComponent from "../components/NotFoundComponent.tsx";

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