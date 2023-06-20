import { useState } from 'react';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';

import { tokens } from '../theme';
import Sidebar from './global/Sidebar';
import Topbar from './global/Topbar';

const Candidate_Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      <div>
        <Topbar />
      </div>
      <div className='flex'>
        <div>
          <Sidebar isSidebar={isSidebar} />
        </div>

        <div className='flex-1 overflow-x-auto'>
          <div align='center'>
            <div>
              <Typography
                variant='h4'
                color={colors.grey[100]}
                fontWeight='bold'
                sx={{ m: '0 0 5px 0' }}
              >
                WELCOME TO RIADS CANDIDATE DASHBOARD
              </Typography>
            </div>
            <hr class='h-px my-8 bg-gray-200 border-2 dark:bg-gray-700'></hr>
            <div class='flex justify-center'>
              <ul class='list-none text-left'>
                <li class='py-2'>
                  <a
                    href='/cadidate-viewregistration'
                    class='text-neutral-600 dark:text-neutral-200 no-underline hover:text-red-500 hover:ml-2 hover:text-lg'
                  >
                    View Registration
                  </a>
                </li>
                <li class='py-2'>
                  <a
                    href='/candidate-studymaterial'
                    class='text-neutral-600 dark:text-neutral-200 no-underline hover:text-red-500 hover:ml-2 hover:text-lg'
                  >
                    Study Material
                  </a>
                </li>
                <li class='py-2'>
                  <a
                    href='/candidate-attendance'
                    class='text-neutral-600 dark:text-neutral-200 no-underline hover:text-red-500 hover:ml-2 hover:text-lg'
                  >
                    Attendance
                  </a>
                </li>
                <li class='py-2'>
                  <a
                    href='/'
                    class='text-neutral-600 dark:text-neutral-200 no-underline hover:text-red-500 hover:ml-2 hover:text-lg'
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidate_Dashboard;
