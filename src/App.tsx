// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";
import Layout from "./components/Layout.tsx";
import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";


function App() {

  return (
    <>
      <Layout>
        <FunctionalComponentWithState/>
        {/*<ClassComponentWithState/>*/}
        {/*<ClassComponent/>*/}
        {/*<FunctionalComponent/>*/}
        {/*<ArrowFunctionalComponent/>*/}
        {/*<ArrowFunctionalComponentWithProps title={"Is an Arrow Functional Component with Props"} />*/}
        {/*<ArrowFunctionalComponentWithPropsType*/}
        {/*    title={"Is an Arrow Functional Component with Props"}*/}
        {/*    description={"this is a description"}/>*/}
        {/*<CodingFactoryLogo/>*/}
      </Layout>
    </>
  )
}

export default App
