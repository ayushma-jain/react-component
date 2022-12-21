function Dashboard(){
    return (
        <>
        <div className="row">
            <div className="col-2">
                <a data-toggle="collapse" href="#sideBar" aria-expanded="false" aria-controls="sideBar" role="button">Click Me!!</a>
                <div className="collapse" id="sideBar">
                    <ul>
                        <li>
                            <a>Dashboard</a>
                        </li>
                        <li>
                            <a>Customers</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-10">
                Body Content
            </div>
        </div>
        </>
    )
}
export default Dashboard;