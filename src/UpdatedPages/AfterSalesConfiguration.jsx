import React from 'react';
import TitleBar from '../UpdatedComponents/StatusCard/TitleBar';
import StatusCard from '../UpdatedComponents/StatusCard/StatusCard';

const AfterSalesConfiguration = () => {
    return (
        <>
            <div>
                <TitleBar titleName="CONFIGURATION" />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-5 mt-3'>
                <StatusCard title="Vendor/Technician" />
                <StatusCard title="Material Create" />
                <StatusCard title="Engineer Create" />
                <StatusCard title="Vouchar Type" />
            </div>
        </>
    );
};

export default AfterSalesConfiguration;