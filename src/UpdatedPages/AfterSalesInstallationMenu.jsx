import React from 'react';
import TitleBar from '../UpdatedComponents/StatusCard/TitleBar';
import StatusCard from '../UpdatedComponents/StatusCard/StatusCard';

const AfterSalesInstallationMenu = () => {
    return (
        <>
            <>
                <div>
                    <TitleBar titleName="INSTALLATION REPORT MENU" />
                </div>


                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-y-5 mt-3'  >
                    <StatusCard title="Assign Vendor /Technician" />
                    <StatusCard title="Engineer Assign" />
                    <StatusCard title="Print Assign Job" />
                    <StatusCard title="Job Status Update" />
                    <StatusCard title="Job Divide" />
                    <StatusCard title="SB Job Create" />
                    <StatusCard title="Material Issue Order" />
                    <StatusCard title="Report" />
                    <StatusCard title="Technician Assign Change " />
                    <StatusCard title="Job Item Update" />
                    <StatusCard title="CDC JOB Re-Open" />
                </div>

            </>
        </>
    );
};

export default AfterSalesInstallationMenu;