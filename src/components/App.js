import "../styles/App.css";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Sign_in/Sign_In";
import FindStayPage from "./Offers/FindStayPage/FindStayPage";
import Flightsearch from "./FlightSearcPage/FlightSearchPage";

function App() {
  return (
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/sign_in_page" element={<SignIn/>}/>
        <Route path = "findStayPage" element = {<FindStayPage/>}/>
        <Route path = "FlightSearchPage" element={<Flightsearch/>}/>
      </Routes>
  );
}

export default App;
