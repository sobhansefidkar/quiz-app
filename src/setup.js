import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

function Setup() {
    const {setup , setNumber , setType , number ,type} = useGlobalContext()

    const travel = () => {
        console.log("hrllo")
    }
    return ( 
        <div className="setup">
            <div className="setup-container">
                <div className="item">
                    <label>تعداد</label>
                    <input onChange={(e) => setNumber(e.target.value)} type="number" min="1" max="3" value={number}></input>
                </div>
                <div className="item">
                    <label>نوع</label>
                    <select className="drop-down" onChange={(e) => setType(e.target.value)} value={type}>
                        <option value="ورزشی">ورزشی</option>
                        <option value="تاریخی">تاریخی</option>
                        <option value="جغرافی">جغرافی</option>
                    </select>
                </div>
                <Link to={"/questions"}>
                <button className="submit-btn" onClick={setup}>ثبت</button>
                </Link>
            </div>
        </div>
     );
}

export default Setup;