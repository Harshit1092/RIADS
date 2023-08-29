import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { db } from '../../../firebase';
import { mockDataRegistration } from '../data/mockData';
import { tokens } from '../theme';
import * as yup from 'yup';
import { storage } from '../../../firebase';
import Sidebar from './global/Sidebar';
import Topbar from './global/Topbar';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, set, useForm } from 'react-hook-form';
// import { where } from 'firebase/firestore';
import { collection, getDocs, orderBy, query, where, updateDoc, doc, getDoc, addDoc } from 'firebase/firestore';
import { useAuth } from '../../../contexts/AuthContext';
import Background from 'hero-slider/dist/components/Slide/Background';
import { Style } from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';
import Form from '../../../components/ui/form';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
// import { Controller } from 'react-hook-form';


const TableRow = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (

    <tr>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='flex items-center'>
          <div className='ml-4'>
            <div className='text-sm font-medium text-gray-900'>
              {data.id}
            </div>
          </div>
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>
          {data.name}
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>
          {data.fathersName}
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>
          {data.email}
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>
          {data.state}
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>
          {data.age}
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>
          {data.gender}
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>
          {data.phoneNumber}
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>
          <button
            type='button'
            className='px-3 py-2 text-white'
            style={{ backgroundColor: data.status === 'Pending' ? 'red' : 'green' }}
            onClick={() => {
              console.log('clicked');

              // change the status to approved
              // update the database status to approved

              const updateID = async () => {
                const q = query(
                  collection(db, 'users'),
                  where('id', '==', data.id)
                );
                await getDocs(q).then(async (response) => {
                  let data = response.docs.map((ele) => ({ ...ele.data() }));
                  const ref = doc(db, 'users', response.docs[0].id);
                  await updateDoc(ref, {
                    status: 'Approved',
                  });
                });

              };

              updateID();




            }}

          >
            {data.status}
          </button>

        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>
          <button className='px-3 py-2 text-white' onClick={handleOpen} style={{ backgroundColor: 'gray' }}>Edit Profile</button>
        </div>
        <Modal onClose={handleClose} open={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 900,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              maxHeight: "80%", // Adjust this value as needed
              overflow: "auto",
            }}
          >
            <div>
              <Form uid ={data.id} update={'true'}/>
            </div>
          </Box>
        </Modal>

      </td>
    </tr>
  )
}


const Admin_CandidateProfile = () => {
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
    'Father Name',
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

  const { currentUser } = useAuth();
  // console.log(currentUser.multiFactor.user.email);
  const emailRef = currentUser.multiFactor.user.email

  // console.log(currentUser.multiFactor.user.uid);

  // Fetching data from database
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const q = query(
        collection(db, 'users'),
      );
      await getDocs(q).then((response) => {
        let data = response.docs.map((ele) => ({ ...ele.data() }));
        setData(data);
        // console.log(data);
      });
    };
    getData();
  },);

  // console.log(data);




  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      <div>
        <Topbar />
      </div>
      <div className='flex flex-1'>
        <div className='w-1/4'>
          <Sidebar isSidebar={isSidebar} />
        </div>
        <div className='flex-1 overflow-x-auto'>
          <div>
            <Typography variant='h5' color={colors.greenAccent[400]}>
              View & Edit Candidate Profiles
            </Typography>
          </div>
          <hr className='h-px my-8 bg-gray-200 border-2 dark:bg-gray-700'></hr>
          {/*make table data */}
          <div className='flex flex-col'>
            <div className='-my-4 overflow-x-auto '>
              <div className='py-6 align-middle inline-block min-w-full pl-4 pr-4'>
                <div className='shadow  border-b border-gray-200 rounded-lg'>
                  <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-gray-50'>
                      <tr>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          UID
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Candidate Name
                        </th>

                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Father Name
                        </th>

                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Email
                        </th>

                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          State
                        </th>

                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Age
                        </th>

                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Gender
                        </th>

                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Phone number
                        </th>

                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Status
                        </th>

                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Edit Profile
                        </th>

                      </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                      {data.map((ele) => (
                        <TableRow data={ele} />
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

export default Admin_CandidateProfile;
