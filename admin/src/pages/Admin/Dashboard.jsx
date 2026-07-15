import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { aToken, getDashData, cancelAppointment, dashData } =
    useContext(AdminContext);

  const { slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken]);

  return (
    dashData && (
      <div className="m-5 space-y-10">
        <div className="flex flex-wrap gap-5">
          <div className="flex items-center gap-4 bg-white p-5 min-w-82.5 flex-1 rounded-xl border shadow-sm hover:shadow-md hover:-translate-y-1 transition">
            <img className="w-14" src={assets.doctor_icon} alt="" />
            <div> <p className="text-2xl font-semibold text-gray-800"> {dashData.doctors} </p>
              <p className="text-sm text-gray-500">Doctors</p>
            </div>
          </div>

       
          <div className="flex items-center gap-4 bg-white p-5 min-w-82.5 flex-1 rounded-xl border shadow-sm hover:shadow-md hover:-translate-y-1 transition">
            <img className="w-14" src={assets.appointments_icon} alt="" />
            <div>
              <p className="text-2xl font-semibold text-gray-800"> {dashData.appointments} </p>
              <p className="text-sm text-gray-500">Appointments</p>
            </div>
          </div>

   
          <div className="flex items-center gap-4 bg-white p-5 min-w-82.5 flex-1 rounded-xl border shadow-sm hover:shadow-md hover:-translate-y-1 transition">
            <img className="w-14" src={assets.patients_icon} alt="" />
            <div>
              <p className="text-2xl font-semibold text-gray-800"> {dashData.patients} </p>
              <p className="text-sm text-gray-500">Patients</p>
            </div>
          </div>
        </div>


        <div className="bg-white rounded-xl border shadow-sm">
          <div className="flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border">
            <img src={assets.list_icon} alt="" />
            <p className="font-semibold">Latest Bookings</p>
          </div>

          <div className="flex flex-col divide-y">
            {dashData.latestAppointments.map((item, index) => (
              <div key={index} className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100">
                <img className="w-10 rounded-full" src={item.docData.image} alt="" />

                <div className="flex-1 text-sm">
                  <p className="font-medium text-gray-800"> {item.docData.name} </p>
                  <p className="text-gray-600">{slotDateFormat(item.slotDate)} </p>
                </div>

                {
                  item.cancelled
                    ? (<span className="text-red-400 text-xs font-medium">Cancelled</span>)
                    : item.isCompleted ? 
                    (<span className="text-green-400 text-xs font-medium">Completed</span>)
                      : (<img onClick={() => cancelAppointment(item._id)} className="w-9 p-1 rounded-full hover:bg-red-100 cursor-pointer transition" src={assets.cancel_icon} alt="" />)
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
