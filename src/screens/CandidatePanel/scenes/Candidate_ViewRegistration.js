import { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { mockDataAttendance, mockDataRegistration } from '../data/mockData';
import { tokens } from '../theme';
import Sidebar from './global/Sidebar';
import Topbar from './global/Topbar';

const Candidate_ViewRegistration = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);
  const columns = [
    { field: 'column1', flex: 0.5 },
    { field: 'column2', flex: 0.5 },
  ];

  const column1Data = [
    'Candidate Name',
    'UID',
    'Father/Mother Name',
    'Age',
    'Gender',
    'Payment Status',
    'Batch',
    'Contact No.',
    'Email',
    'Course Selected',
    'Course Online/Offline',
  ];

  const rows = column1Data.map((item, index) => ({
    id: index,
    column1: item,
    column2: mockDataRegistration[index],
  }));

  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      <div>
        <Topbar />
      </div>
      <div className='flex flex-1'>
        <div>
          <Sidebar isSidebar={isSidebar} />
        </div>
        <div className='flex-1 overflow-x-auto'>
          <div className='text-center'>
            <Typography variant='h5' color={colors.greenAccent[400]}>
              View and Edit Registration
            </Typography>
          </div>
          <hr class='h-px my-8 bg-gray-200 border-2 dark:bg-gray-700'></hr>

          <div className='flex flex-col'>
            <div className='-my-4 overflow-x-auto'>
              <div className='py-6 align-middle inline-block min-w-full pl-4 pr-4'>
                <div className='shadow overflow-hidden border-b border-gray-200 h-[500px] overflow-y-auto sm:rounded-lg'>
                  <table className='min-w-full divide-y divide-gray-200'>
                    <tbody className='bg-white divide-y divide-gray-200'>
                      {column1Data.map((item, index) => (
                        <tr key={index}>
                          <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 bg-gray-50 uppercase tracking-wider'>
                            {item}
                          </th>
                          <td className='px-6 py-4 whitespace-nowrap'>
                            <div className='flex items-center'>
                              <div className='ml-4'>
                                <div className='text-sm font-medium text-gray-900'>
                                  {mockDataRegistration[index]}
                                </div>
                              </div>
                            </div>
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

export default Candidate_ViewRegistration;
