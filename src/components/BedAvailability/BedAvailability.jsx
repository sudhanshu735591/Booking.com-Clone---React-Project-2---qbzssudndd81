import Button from "../Button/Button";
import "./BedAvailability.css";

function BedAvailability(){
    return(
        <div className="jnjrnf ">
            <div className="font-bold">Availability</div>

            <table className="w-full text-left">
                <tr className="rfffr">
                    <th>Room Type</th>
                    <th>Number of guests</th>
                    <th>Room Type</th>
                </tr>


                <tr className="text-left	">
                    <td className="dji3jo">Deluxe Room
                    <p className="font-normal text-sm">1 king bed</p>
                    </td>
                    <td className="dji3jo">3</td>
                    <td className="dji3jo">
                        <Button className="ejdnedi" text = "Show Prices"/>
                    </td>
                </tr>

                <tr className="text-left	">
                    <td className="dji3jo">Deluxe Room
                    <p className="font-normal text-sm">1 king bed</p>
                    </td>
                    <td className="dji3jo">3</td>
                    <td className="dji3jo">
                        <Button className="ejdnedi" text = "Show Prices"/>
                    </td>
                </tr>


                <tr className="text-left	">
                    <td className="dji3jo">Deluxe Room
                    <p className="font-normal text-sm">1 king bed</p>
                    </td>
                    <td className="dji3jo">3</td>
                    <td className="dji3jo">
                        <Button className="ejdnedi" text = "Show Prices"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default BedAvailability;