import { NavLink } from "react-router-dom"

const SideNavbar = () => {
    return (
        <aside class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
            <div class="sidenav-header">
                <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                <a class="navbar-brand m-0" href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html " target="_blank">
                    <img src="/img/logo-ct-dark.png" class="navbar-brand-img h-100" alt="main_logo" />
                    <span class="ms-1 font-weight-bold">Garage V. Parrot</span>
                </a>
            </div>
            <hr class="horizontal dark mt-0" />
            <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/admin">
                            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i class="material-symbols-outlined text-primary text-lg opacity-10">construction</i>
                            </div>
                            <span class="nav-link-text ms-1">Services</span>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/admin">
                            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i class="material-symbols-outlined text-primary text-lg opacity-10">contact_mail</i>
                            </div>
                            <span class="nav-link-text ms-1">Contacts</span>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/admin">
                            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i class="material-symbols-outlined text-primary text-lg opacity-10">garage</i>
                            </div>
                            <span class="nav-link-text ms-1">Voitures</span>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/admin">
                            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i class="material-symbols-outlined text-primary text-lg opacity-10">person</i>
                            </div>
                            <span class="nav-link-text ms-1">Utilisateurs</span>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/admin">
                            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i class="material-symbols-outlined text-primary text-lg opacity-10">reviews</i>
                            </div>
                            <span class="nav-link-text ms-1">Avis clients</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SideNavbar