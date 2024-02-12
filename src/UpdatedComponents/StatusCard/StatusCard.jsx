import { FaRegCalendarCheck } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { FaRegCircleDot } from "react-icons/fa6";

const StatusCard = ({ title }) => {
    return (
        <>

            <div className="bg-[#F9FAFB] border rounded-md w-[279px]">
                <div className="mx-3 my-3">
                    <div className="flex gap-x-32">
                        <div className=" border rounded-full w-[100px] h-[22px] flex gap-x-2">
                            <FaRegCircleDot className="ml-2 mt-0.5 text-[#F9333E]" />
                            <div className="text-[11px] font-[500] mt-0.5 ">pending</div>
                        </div>

                        <div><BsThreeDots /></div>
                    </div>

                    <div className="my-3 text-[18px] font-[500]"> {title} </div>

                    <div className="flex gap-x-4">
                        <FaRegCalendarCheck />
                        <div className="mt-[-4px]">August 05</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatusCard;
















// import { FaRegCalendarCheck } from "react-icons/fa6";
// import { BsThreeDots } from "react-icons/bs";
// import { FaRegCircleDot } from "react-icons/fa6";

// const StatusCard = () => {
//     return (
//         <>

//             <div className="bg-[#F9FAFB] border rounded-md w-[279px] ml-2">
//                 <div className="mx-3 my-3">
//                     <div className="flex gap-x-32">
//                         <div className=" border rounded-full w-[100px] h-[22px] flex gap-x-2">
//                             <FaRegCircleDot className="ml-2 mt-0.5 text-[#F9333E]" />
//                             <div className="text-[11px] font-[500] mt-0.5 ">pending</div>
//                         </div>

//                         <div><BsThreeDots /></div>
//                     </div>

//                     <div className="my-3 text-[18px] font-[500]">Complain Received</div>

//                     <div className="flex gap-x-4">
//                         <FaRegCalendarCheck />
//                         <div className="mt-[-4px]">August 05</div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default StatusCard;