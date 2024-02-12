import React from 'react';
import StatusCard from '../UpdatedComponents/StatusCard/StatusCard';
import TitleBar from '../UpdatedComponents/StatusCard/TitleBar';

const AfterSaleSalesServiceComplainMenu = () => {
    return (
        <>

            <div>
                <TitleBar titleName="Sales Services" />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-5 mt-3'>
                <StatusCard title="Complain Received" />
                <StatusCard title="Job Assign" />
                <StatusCard title="Complain Job Book" />
                <StatusCard title="Technician Change" />
                <StatusCard title="Complain Master Report" />
                <StatusCard title="Complain Master Summery" />
            </div>

        </>
    );
};

export default AfterSaleSalesServiceComplainMenu;