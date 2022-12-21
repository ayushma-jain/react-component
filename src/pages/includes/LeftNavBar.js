
function LeftNavBar(){
    return(
        <>
            <div className="sideBarDiv">
                <ul className="navbar-nav navbar-dark bg-success">
                    <li className="nav-item active">
                        <a className="nav-link"  href="image-upload">Image Upload Plugin</a>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link" href="data-table">Data Table</a>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link" href="no-page">Calender</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default LeftNavBar;