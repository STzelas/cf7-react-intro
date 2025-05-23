// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";

import Layout from "./components/Layout.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";

function App() {

  return (
    <>
        {/*<ClassComponent/>*/}
        {/*<FunctionalComponent/>*/}
        {/*<ArrowFunctionalComponent/>*/}
        {/*<ArrowFunctionalComponentWithProps title={"Is an Arrow Functional Component with Props"} />*/}
        {/*<ArrowFunctionalComponentWithPropsType*/}
        {/*    title={"Is an Arrow Functional Component with Props"}*/}
        {/*    description={"this is a description"}/>*/}
        {/*<CodingFactoryLogo/>*/}
      <Layout>
        <h1 className={"text-center text-2xl font-bold"}>This is a title</h1>
        <FunctionalComponent/>
      </Layout>
    </>
  )
}

export default App
