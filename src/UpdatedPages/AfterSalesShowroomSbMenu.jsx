import React from 'react';
import TitleBar from '../UpdatedComponents/StatusCard/TitleBar';
import StatusCard from '../UpdatedComponents/StatusCard/StatusCard';

const AfterSalesShowroomSbMenu = () => {
    return (
        <>
            <div>
                <TitleBar titleName="SHOWROOM" />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-5 mt-3'>
                <StatusCard title="Print Assign Job" />
                <StatusCard title="SB Bill" />
                <StatusCard title="SB Bill Register" />
                <StatusCard title="SB Received Register" />
            </div>
        </>
    );
};

export default AfterSalesShowroomSbMenu;