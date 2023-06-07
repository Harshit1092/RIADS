import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";

import { mockDataAttendance } from "../data/mockData";
import Topbar from "./global/Topbar";
import Sidebar from "./global/Sidebar";



const Admin_Attendance = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);




  return (
    <div className="flex flex-col h-screen bg-gray-100"  >
      <div><Topbar /></div>
      <div className="flex flex-1">
        <div className="w-1/5 flex-shrink-0">
          <Sidebar isSidebar={isSidebar} />
        </div>
        <div className="flex-1 overflow-x-auto">
          <Typography variant="h5" color={colors.greenAccent[400]}>
            Attendance
          </Typography>
          <hr class="h-px my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>

          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-0 lg:-mx-0">
              <div className="py-2 align-middle inline-block min-w-full sm:pl-0 sm:pr-4 lg:pl-0 lg:pr-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          UID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Candidate Name
                        </th>


                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider "
                          rowspan="2"
                        >
                          
                          Batch Date
                          <tr>
                        <th
                          scope="col"
                          className="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          From
                        </th>
                        <th
                          scope="col"
                          className="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          To
                        </th>
                          
                        </tr>
                        </th>   
                                               

                        
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Day
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Hours Attended
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Batch
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Click to Download Attendance Certificate
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Send Email to Download Certificate
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {mockDataAttendance.map(mockDataAttendance => (
                        <tr key={mockDataAttendance.uid}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{mockDataAttendance.uid}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{mockDataAttendance.name}</div>
                              </div>
                            </div>
                          </td>
                          <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{mockDataAttendance.from}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{mockDataAttendance.to}</div>
                              </div>
                            </div>
                          </td>
                          </tr>
                          
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{mockDataAttendance.day}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{mockDataAttendance.hours}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{mockDataAttendance.batch}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Download
                            </a>
                          </td>                          
                          <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Email
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_Attendance;
