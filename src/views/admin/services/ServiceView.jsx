const ServiceView = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card mb-4">
                    <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                        <h6>Liste des services</h6>
                        <div><button className="btn btn-primary">Nouveau service</button></div>
                    </div>
                    <div className="ccard-body px-0 pt-0 pb-2">
                        <div className="table-responsive p-0">
                            <table className="table align-items-center mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">#</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nom</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Description</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Nom</td>
                                        <td>description</td>
                                        <td>edit, delete</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceView