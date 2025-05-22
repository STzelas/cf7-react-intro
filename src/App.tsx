// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";

function App() {

  return (
    <>
        <ArrowFunctionalComponent/>
        <ArrowFunctionalComponentWithProps title={"Is an Arrow Functional Component with Props"} />
    </>
  )
}

export default App
