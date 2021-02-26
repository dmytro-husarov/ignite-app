import { Route } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import Nav from "./components/Nav"
import Home from "./pages/Home"


function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Route path={["game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  )
}

export default App
