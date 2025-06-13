
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import ExamplesPage from "./pages/ExamplesPage.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
import AutoRedirectAdvanced from "./components/AutoRedirectAdvanced.tsx";



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
        {/*<Layout>*/}
          <Routes>
            {/*<Route path={"/"} element={<HomePage/>}/>*/}
            <Route element={<RouterLayout/>}>
            {/* Εδώ βάζουμε τα στοιχεία που θέλουμε να ακολουθήσουν στο layout */}
              <Route index element={<HomePage/>}/>
            </Route>

            <Route path="examples" element={<RouterExamplesLayout/>}>
              <Route index element={<ExamplesPage/>}/>
              <Route path="name-changer" element={<NameChangerPage/>}/>
              <Route path="online-status" element={<OnlineStatusPage/>}/>
              <Route path="auto-redirect" element={<AutoRedirectPage/>}/>
              <Route path="auto-redirect-advanced" element={<AutoRedirectAdvanced/>}/>
            </Route>

            <Route path="users/:userId" element={<UserPage/>}/>
            <Route path="users" element={<UserPage/>}/>

          </Routes>
        {/*</Layout>*/}

      </BrowserRouter>
    </>
  )
}

export default App
