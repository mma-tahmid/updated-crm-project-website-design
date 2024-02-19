import React from 'react';
import TitleBar from '../UpdatedComponents/StatusCard/TitleBar';
import InputField from '../UpdatedComponents/StatusCard/InputField';

const CDCJobReOpen = () => {

    return (

        <>
            <div>
                <TitleBar titleName="CDC Job Re Open" />
            </div>


            <div className='mt-16 mx-20 pb-17'>
                
                    <InputField labelName="CDC Job / Invoice No"/>
                
            </div>

            {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-5 mt-3'  >
                <StatusCard title="Job Assign Register" />
                <StatusCard title="Job Assign Pending" />
                <StatusCard title="Job Done Pending" />
                <StatusCard title="Job Done Register" />
                <StatusCard title="Job Comparison" />
            </div> */}


        </>

    );
};

export default CDCJobReOpen;