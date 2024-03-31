import DataTable from "../DataTable/DataTable";
import Datadetails from "../Datadetails/Datadetails";
import Linechart1 from "../Linechart1/Linechart1";
import Linechart2 from "../Linechart2/Linechart2";

import './dashboard.css'
 
const Dashboard =()=>{
    return <div className="dashboard">
        <div className="top">
            <Linechart1 className="linechart1"/>
        <Linechart2 className='linechart2'/>
        </div>
        <Datadetails/>
        <DataTable className="datatable"/>
    </div>
}
export default Dashboard
