
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/Routers/RouterLayout.tsx";
import ExamplesPage from "./pages/ExamplesPage.tsx";
import RouterExamplesLayout from "./components/Routers/RouterExamplesLayout.tsx";
import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
import AutoRedirectAdvanced from "./components/FunctionalComponents/AutoRedirectAdvanced.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import FocusInput from "./components/FunctionalComponents/FocusInput.tsx";
import UncontrolledInput from "./components/FunctionalComponents/UncontrolledInput.tsx";
import MultiFieldForm from "./components/FormComponents/MultiFieldForm.tsx";
import MultiFieldFormWithValidation from "./components/FormComponents/MultiFieldFormWithValidation.tsx";
import MultiFieldFormWithZodValidation from "./components/FormComponents/MultiFieldFormWithZodValidation.tsx";



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
              <Route path="multi-field-form" element={<MultiFieldForm/>}/>
              <Route path="multi-field-form-validation" element={<MultiFieldFormWithValidation/>}/>
              <Route path="multi-field-form-zod" element={<MultiFieldFormWithZodValidation/>}/>
            </Route>

            <Route path="examples" element={<RouterExamplesLayout/>}>
              <Route index element={<ExamplesPage/>}/>
              <Route path="name-changer" element={<NameChangerPage/>}/>
              <Route path="online-status" element={<OnlineStatusPage/>}/>
              <Route path="auto-redirect" element={<AutoRedirectPage/>}/>
              <Route path="auto-redirect-advanced" element={<AutoRedirectAdvanced/>}/>
              <Route path="focus-input" element={<FocusInput/>}/>
              <Route path="uncontrolled-input" element={<UncontrolledInput/>}/>
            </Route>

            <Route path="users/:userId" element={<UserPage/>}/>
            <Route path="users" element={<UserPage/>}/>


            {/* Στο τέλος των routes!! έχουμε
            το παρακάτω / το * σημαίνει catch all errors
             ΠΑΝΤΑ ΣΤΟ ΤΕΛΟΣ ΓΙΑΤΙ ΑΛΛΙΩΣ
             ΕΧΕΙ ΠΡΟΒΛΗΜΑ ΜΕ ΤΗΝ ΠΡΟΤΕΡΑΙΟΤΗΤΑ*/}
            <Route path="*" element={<NotFoundPage/>}/>

          </Routes>
        {/*</Layout>*/}

      </BrowserRouter>
    </>
  )
}

export default App
