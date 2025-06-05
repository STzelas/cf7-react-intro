// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import Layout from "./components/Layout.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
// import Layout from "./components/Layout.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import { useEffect } from "react";
// import OnlineStatus from "./components/OnlineStatus.tsx";
// import Counter from "./components/Counter.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import Todo from "./components/ToDoApp/Todo.tsx";


function App() {

  // useEffect(() => {
  //   const id: number = setInterval( () => console.log("tick"), 1000)
  //   return() =>  clearInterval(id)
  // }, [])

  return (
    <>
      {/*<Layout>*/}
      {/*  <OnlineStatus/>*/}
      {/*  /!*<Todo />*!/*/}
      {/*  /!*<CounterWithReducer/>*!/*/}
      {/*  /!*<CounterAdvancedWithCustomHook/>*!/*/}
      {/*  /!*<CounterWithCustomHook/>*!/*/}
      {/*  /!*<CounterAdvanced/>*!/*/}
      {/*  /!*<CounterWithMoreStates/>*!/*/}
      {/*  /!*<Counter/>*!/*/}
      {/*  <NameChanger/>*/}
      {/*  /!*<FunctionalComponentWithState/>*!/*/}
      {/*  /!*<ClassComponentWithState/>*!/*/}
      {/*  /!*<ClassComponent/>*!/*/}
      {/*  /!*<FunctionalComponent/>*!/*/}
      {/*  /!*<ArrowFunctionalComponent/>*!/*/}
      {/*  /!*<ArrowFunctionalComponentWithProps title={"Is an Arrow Functional Component with Props"} />*!/*/}
      {/*  /!*<ArrowFunctionalComponentWithPropsType*!/*/}
      {/*  /!*    title={"Is an Arrow Functional Component with Props"}*!/*/}
      {/*  /!*    description={"this is a description"}/>*!/*/}
      {/*  /!*<CodingFactoryLogo/>*!/*/}
      {/*</Layout>*/}

      <BrowserRouter>
        <Layout>
          <Routes>
            {/*<Route path={"/"} element={<HomePage/>}/>*/}
            <Route index element={<HomePage/>}/>
            <Route path={"examples"}>   {/* /examples/... */}
              <Route path="name-changer" element={<NameChangerPage/>}/>
              <Route path="online-status" element={<OnlineStatusPage/>}/>
            </Route>

          </Routes>
        </Layout>

      </BrowserRouter>
    </>
  )
}

export default App
