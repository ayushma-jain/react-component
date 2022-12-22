
import { FaCloudUploadAlt, FaDatabase,FaRegCalendarAlt, FaTextHeight, FaDailymotion } from "react-icons/fa";
function LeftNavBar(){
    return(
        <>
        
            <div id="sideBarDiv" className=" sideBarDiv">

                <ul className="navbar-nav navbar-dark bg-success">
                    <li className="nav-item active">
                        <a className="nav-link"  href="/"><FaDailymotion/>  <span className="d-xl-inline-block d-sm-none d-none">Dashboard</span></a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link"  href="image-upload"><FaCloudUploadAlt/>  <span className="d-xl-inline-block d-sm-none d-none">Image Upload Plugin</span></a>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link" href="data-table"><FaDatabase />  <span className="d-xl-inline-block d-sm-none d-none">Data Table</span> </a>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link" href="calendar"><FaRegCalendarAlt/>  <span className="d-xl-inline-block d-sm-none d-none">Calender</span></a>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link" href="text-utils"><FaTextHeight/>  <span className="d-xl-inline-block d-sm-none d-none">Text Utils</span></a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default LeftNavBar;