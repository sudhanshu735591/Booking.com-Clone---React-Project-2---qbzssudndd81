import "../styles/App.css";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Sign_in/Sign_In";
import FindStayPage from "./Offers/FindStayPage/FindStayPage";
import Flightsearch from "./FlightSearcPage/FlightSearchPage";
import HotelCards from "./HotelCards/HotelCards";
import SingleInfo from "./SingleInfoData/SingleInfo";
import FavoriteList from "./FavoriteList/FavoriteList";
import FormDetails from "./CheckOutPage/FormDetails/FormDetails";
import PaymentDetails from "./CheckOutPage/PaymentSection/PaymentSection";
import FlightHome from "./FlightSection/FlightHome/FlightHome";
import TicketType from "./FlightSection/TicketType/TicketType";
import Flying from "./FlightSection/FlyingSection/Flying";
import FlightCheckOut from "./FlightSection/CheckOutDetails/FlightCheckOutDetails";
import FlightPayment from "./FlightSection/FlightPayment/FlightPayment";
import RegisterPage from "./RegisterPage/RegisterPage";
import FavoriteData from "./FavoriteData/FavoriteData";

function App() {
  return (
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/sign_in_page" element={<SignIn/>}/>
        <Route path = "/findStayPage" element = {<FindStayPage/>}/>
        <Route path = "/FlightSearchPage" element={<Flightsearch/>}/>
        <Route path = "/Hotels"  element={<HotelCards/>}/>
        <Route path="/Singleinfo/:id" element={<SingleInfo/>}/>
        <Route path = "/FavoriteList" element= {<FavoriteList/>}/>
        <Route path = "/FormDetails/:id" element= {<FormDetails/>}/>
        <Route path="/paymentsection/:id" element ={<PaymentDetails/>}/>
        <Route path="FlightSection" element={<FlightHome/>}/>
        <Route path="TicketType" element={<TicketType/>}/>
        <Route path="/flying" element={<Flying/>}/>

        <Route path="/FlightCheckOut" element={<FlightCheckOut/>}/>
        <Route path="/FlightPayment" element={<FlightPayment/>}/>
        <Route path="/RegisterPage" element={<RegisterPage/>}/>

        <Route path="/FavoriteData" element={<FavoriteData/>}/>

      </Routes>
  );
}

export default App;
