import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>

            <div>
                <Link to={"/complain-received"}> Complain Received </Link>
            </div>

            <div>
                <Link to={"/complain-received2"}> Complain Received 2 </Link>
            </div>

            <div>
                <Link to={"/complain-received-edit"}> Complain Received/Edit </Link>
            </div>

            <div>
                <Link to={"/complain-received-day-book"}> Complain Received Day Book </Link>
            </div>

            <div>
                <Link to={"/sales-service-job-assign"}> Sales Service Job Assign </Link>
            </div>

            <div>
                <Link to={"/print-service-assign-job"}> Print-Service-Assign-job </Link>
            </div>

            <div>
                <Link to={"/print-service-assign-job-update"}> Print Service Assign job Update </Link>
            </div>

            <div>
                <Link to={"/after-saleSales-service-complain-menu"}> After Sale/Sales Service Complain Menu </Link>
            </div>

            <div>
                <Link to={"/after-saleSales-service-configuration"}> After-Sale/Sales Service Configuration </Link>
            </div>

            <div>
                <Link to={"/after-sales-configuration"}> After Sales Configuration </Link>
            </div>

            <div>
                <Link to={"/after-sales-show-room-sbMenu"}> After Sales Showroom Sb Menu </Link>
            </div>

            <div>
                <Link to={"/after-sales-installation-job-book"}> After-Sales-Installation-Job-Book </Link>
            </div>

        </div>
    );
};

export default Home;