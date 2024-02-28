import { addDays } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./Calender.css"
import UserContext from "../ContextApi/userContext";

function CalenderApp() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection"
    }
  ]);

  // const {globalDate, setGlobalDate} = useContext(UserContext);

  const { setStartWeekDay } = useContext(UserContext);

  const { setStartDate} = useContext(UserContext);

  const {setEndDate} = useContext(UserContext);

  const {endWeekDay, setEndWeekDay} = useContext(UserContext);


  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];


    

  state.forEach(dateObj => {
    const startDate = new Date(dateObj.startDate);
    const endDate = new Date(dateObj.endDate);
    
    const startDay = startDate.getDate();
    const startMonth = startDate.getMonth() + 1;
    const startWeek = startDate.getDay();

    const endDay = endDate.getDate();
    const endMonth = endDate.getMonth() + 1;
    const endWeek = endDate.getDay();

    setStartWeekDay(`${daysOfWeek[startWeek]}`);
    setEndWeekDay(`${daysOfWeek[endWeek]}`);

    setStartDate(`${startDay} ${month[startMonth]}`);
    setEndDate(`${endDay} ${month[endMonth]}`);

  });



  return (
    <div>
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
      />
    </div>
  );
}


export default CalenderApp;