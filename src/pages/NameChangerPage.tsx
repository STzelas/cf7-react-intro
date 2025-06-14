import NameChanger from "../components/FunctionalComponents/NameChanger.tsx";
import {useEffect} from "react";

const NameChangerPage = () => {

  useEffect(() => {
    document.title = "CF7 Name Changer";
  })

  return (
    <>
      <NameChanger/>
    </>
  )
}

export default NameChangerPage;