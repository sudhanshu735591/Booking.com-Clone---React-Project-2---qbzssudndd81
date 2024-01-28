import "../styles/App.css";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Sign_in/Sign_In";

function App() {
  return (
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/sign_in_page" element={<SignIn/>}/>
      </Routes>
  );
}

export default App;
