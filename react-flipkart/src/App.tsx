import { BrowserRouter ,Route,Routes} from "react-router-dom"
import { Home } from "./pages/home/Home.page"
import { Lessons } from "./pages/lessons/Lessons.page"
import { Login } from "./pages/login/Login.page"
import { Register } from "./pages/register/Register.page"
import { MyNavbar } from "./components/navbar/MyNavbar.com"

export let App:React.FC<{}>=()=>{
  return <div>
<MyNavbar/>
    <BrowserRouter
    >
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/lessons" element={<Lessons/>}/>
<Route path="/login" element={  <Login/>}/>
<Route path="/register" element={<Register/>}/>
</Routes>
    </BrowserRouter>
  
    
    
    
  </div>
}