import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './Pages/About';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
  export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path = '/'  element = {<Home />} />
    <Route path = '/about'  element = {<About/>} /> 
    <Route path = '/sign-in'  element = {<SignIn/>} />
    <Route path = '/sign-up'  element = {<SignUp />} />
    <Route path = '/dashboard'  element = {<Dashboard />} />
    <Route path = '/projects'  element = {<Projects/>} />

    </Routes>  

    </BrowserRouter>
  )
}