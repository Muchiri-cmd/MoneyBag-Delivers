import { DashBoard,Home,NavBar, Prospects,Proposals,Account } from "./components"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/prospects' element={<Prospects />} />
          <Route path='/proposals' element={<Proposals />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </Router>
      
      
      
    </>
  )
}

export default App
