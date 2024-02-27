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

  const {globalDate, setGlobalDate} = useContext(UserContext);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    

  state.forEach(dateObj => {
    const startDate = new Date(dateObj.startDate);
    const endDate = new Date(dateObj.endDate);
    
    const startDay = startDate.getDate();
    const startMonth = startDate.getMonth() + 1;
    const startWeek = startDate.getDay();

    const endDay = endDate.getDate();
    const endMonth = endDate.getMonth() + 1;
    const endWeek = endDate.getDay();

    console.log(`${startDay} ${startMonth} ${daysOfWeek[startWeek]}`);
    console.log(`${endDay} ${endMonth} ${daysOfWeek[endWeek]}`);
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