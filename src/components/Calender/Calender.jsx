import { addDays } from "date-fns";
import { useContext, useState } from "react";
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

  const { setStartWeekDay } = useContext(UserContext);

  const { setStartDate} = useContext(UserContext);

  const {setEndDate} = useContext(UserContext);

  const {setEndWeekDay} = useContext(UserContext);

  const {setStartYear} = useContext(UserContext);

  const {setEndYear} = useContext(UserContext);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  state.forEach(dateObj => {
    const startDate = new Date(dateObj.startDate);
    const endDate = new Date(dateObj.endDate);

    var diffDays = startDate.getDate() - endDate.getDate(); 
    console.log(diffDays);
    
    
    const startDay = startDate.getDate();
    const startMonth = startDate.getMonth() + 1;
    const startWeek = startDate.getDay();
    const startYear = startDate.getFullYear();

    const endDay = endDate.getDate();
    const endMonth = endDate.getMonth() + 1;
    const endWeek = endDate.getDay();
    const endYear = startDate.getFullYear();

    setStartWeekDay(`${daysOfWeek[startWeek]}`);
    setEndWeekDay(`${daysOfWeek[endWeek]}`);
    setStartDate(`${startDay} ${month[startMonth]}`);
    setEndDate(`${endDay} ${month[endMonth]}`);
    setStartYear(startYear);
    setEndYear(endYear);
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