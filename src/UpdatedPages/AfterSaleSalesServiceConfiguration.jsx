import React from 'react';
import TitleBar from '../UpdatedComponents/StatusCard/TitleBar';
import StatusCard from '../UpdatedComponents/StatusCard/StatusCard';

const AfterSaleSalesServiceConfiguration = () => {
    return (
        <>
            <div>
                <TitleBar titleName="Sales Services" />
            </div>


            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-5 mt-3'  >
                <StatusCard title="Complain Received" />
                <StatusCard title="Problem Create" />
                <StatusCard title="CRO Create" />
                <StatusCard title="Vendor/Technician" />
                <StatusCard title="Material Create" />
                <StatusCard title="Material Rate Set" />
            </div>


        </>
    );
};

export default AfterSaleSalesServiceConfiguration;

