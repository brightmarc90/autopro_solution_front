import SideNavbar from "../../components/admin/SideNavbar"

const AdminView = () => {
    return (
        <div className="g-sidenav-show bg-gray-100">
            <div class="min-height-300 bg-primary position-absolute w-100"></div>
            <SideNavbar />
            <main class="main-content position-relative border-radius-lg ">
                <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur" data-scroll="false">
                    <div class="container-fluid py-1 px-3">
                        <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                            <ul class="navbar-nav  justify-content-end">
                                <li class="nav-item d-flex align-items-center">
                                    <div class="text-white font-weight-bold px-0">
                                        <i class="fa fa-user me-sm-1"></i>
                                        <span class="d-sm-inline d-none">Nom prénom</span>
                                    </div>                         
                                </li>
                                <li class="nav-item d-flex align-items-center ms-4">
                                    <div class="text-white px-0">
                                        <span class="material-symbols-outlined pt-2">logout</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </main>
        </div>
    )
}

export default AdminView