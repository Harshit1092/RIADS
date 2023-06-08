import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(4, 'Name should be at least 4 characters')
    .max(50, 'Name should not exceed 50 characters'),
  fathersName: yup
    .string()
    .required("Father's name is required")
    .min(4, "Father's name should be at least 4 characters")
    .max(50, "Father's name should not exceed 50 characters"),
  dateOfBirth: yup.date().required('Date of birth is required'),
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .matches(/^\d+$/, 'Invalid phone number'),
  email: yup.string().email('Invalid email').required('Email is required'),
  qualification: yup.string().required('Qualification is required'),
  passportSizePhoto: yup
    .mixed()
    .required('Back picture of driving license is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  pinCode: yup
    .string()
    .required('Pin code is required')
    .matches(/^\d+$/, 'Invalid pin code'),
  state: yup.string().required('State is required'),
  adhaarCardNumber: yup
    .string()
    .required('Aadhaar card number is required')
    .matches(/^\d+$/, 'Invalid Aadhaar card number'),
  district: yup.string().required('District is required'),
  frontAdhaarCard: yup
    .mixed()
    .required('Back picture of driving license is required'),
  backAdhaarCard: yup
    .mixed()
    .required('Back picture of driving license is required'),
  drivingLicenseNumber: yup
    .string()
    .required('Driving license number is required'),
  licenseCategory: yup.string().required('License category is required'),
  licenseIssueDate: yup.date().required('License issue date is required'),
  licenseExpiryDate: yup.date().required('License expiry date is required'),
  issuingAuthority: yup.string().required('Issuing authority is required'),
  frontDrivingLicense: yup
    .mixed()
    .required('Back picture of driving license is required'),
  backDrivingLicense: yup
    .mixed()
    .required('Back picture of driving license is required'),
});

const qualificationOptions = [
  '5th Standard',
  '8th Standard',
  '10th Standard',
  '12th Standard',
  'Graduation',
  'Other',
];

export default function Form() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      qualification: '',
      issuingAuthority: '',
      licenseCategory: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container className='my-20'>
      <Box mt={4} mb={2}>
        <Typography variant='h3' align='center' className='my-4'>
          Registration Form
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='name'
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Name'
                  placeholder='Enter your name'
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='fathersName'
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Father's Name"
                  placeholder="Enter your father's name"
                  error={!!errors.fathersName}
                  helperText={errors.fathersName?.message}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='dateOfBirth'
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Date of Birth'
                  type='date'
                  error={!!errors.dateOfBirth}
                  helperText={errors.dateOfBirth?.message}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='phoneNumber'
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Phone Number'
                  placeholder='Enter your phone number'
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber?.message}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='email'
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Email'
                  placeholder='Enter your email'
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='qualification'
              render={({ field }) => (
                <FormControl error={!!errors.qualification} fullWidth>
                  <InputLabel>Qualification</InputLabel>
                  <Select {...field}>
                    {qualificationOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.qualification && (
                    <Typography color='error' variant='caption'>
                      {errors.qualification.message}
                    </Typography>
                  )}
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='passportSizePhoto'
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Passport Size Photo'
                  type='file'
                  error={!!errors.passportSizePhoto}
                  helperText={errors.passportSizePhoto?.message}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='address'
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Address'
                  placeholder='Enter your address'
                  error={!!errors.address}
                  helperText={errors.address?.message}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='city'
              render={({ field }) => (
                <TextField
                  {...field}
                  label='City'
                  placeholder='Enter your city'
                  error={!!errors.city}
                  helperText={errors.city?.message}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='pinCode'
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Pin Code'
                  placeholder='Enter your pin code'
                  error={!!errors.pinCode}
                  helperText={errors.pinCode?.message}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='state'
              render={({ field }) => (
                <TextField
                  {...field}
                  label='State'
                  placeholder='Enter your state'
                  error={!!errors.state}
                  helperText={errors.state?.message}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='adhaarCardNumber'
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Aadhaar Card Number'
                  placeholder='Enter your Aadhaar card number'
                  error={!!errors.adhaarCardNumber}
                  helperText={errors.adhaarCardNumber?.message}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='district'
              render={({ field }) => (
                <TextField
                  {...field}
                  label='District'
                  placeholder='Enter your district'
                  error={!!errors.district}
                  helperText={errors.district?.message}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='frontAdhaarCard'
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Front Picture of Aadhaar Card'
                  type='file'
                  error={!!errors.frontAdhaarCard}
                  helperText={errors.frontAdhaarCard?.message}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='backAdhaarCard'
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Back Picture of Aadhaar Card'
                  type='file'
                  error={!!errors.backAdhaarCard}
                  helperText={errors.backAdhaarCard?.message}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='drivingLicenseNumber'
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Driving License Number'
                  placeholder='Enter your driving license number'
                  error={!!errors.drivingLicenseNumber}
                  helperText={errors.drivingLicenseNumber?.message}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='licenseCategory'
              render={({ field }) => (
                <FormControl error={!!errors.licenseCategory} fullWidth>
                  <InputLabel>License Category</InputLabel>
                  <Select {...field}>
                    <MenuItem value='LMV'>LMV</MenuItem>
                    <MenuItem value='HMV'>HMV</MenuItem>
                    <MenuItem value='LTV'>LTV</MenuItem>
                    <MenuItem value='HTV'>HTV</MenuItem>
                  </Select>
                  {errors.licenseCategory && (
                    <Typography color='error' variant='caption'>
                      {errors.licenseCategory.message}
                    </Typography>
                  )}
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='licenseIssueDate'
              render={({ field }) => (
                <TextField
                  {...field}
                  label='License Issue Date'
                  type='date'
                  error={!!errors.licenseIssueDate}
                  helperText={errors.licenseIssueDate?.message}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='licenseExpiryDate'
              render={({ field }) => (
                <TextField
                  {...field}
                  label='License Expiry Date'
                  type='date'
                  error={!!errors.licenseExpiryDate}
                  helperText={errors.licenseExpiryDate?.message}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='issuingAuthority'
              render={({ field }) => (
                <FormControl error={!!errors.issuingAuthority} fullWidth>
                  <InputLabel>Issuing Authority</InputLabel>
                  <Select {...field}>
                    <MenuItem value='RTO'>RTO</MenuItem>
                    <MenuItem value='DTO'>DTO</MenuItem>
                    <MenuItem value='SDM'>SDM</MenuItem>
                  </Select>
                  {errors.issuingAuthority && (
                    <Typography color='error' variant='caption'>
                      {errors.issuingAuthority.message}
                    </Typography>
                  )}
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='frontDrivingLicense'
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Front Picture of Driving License'
                  type='file'
                  error={!!errors.frontDrivingLicense}
                  helperText={errors.frontDrivingLicense?.message}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              control={control}
              name='backDrivingLicense'
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Back Picture of Driving License'
                  type='file'
                  error={!!errors.backDrivingLicense}
                  helperText={errors.backDrivingLicense?.message}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
        <div className='flex justify-center items-center my-10'>
          <Button type='submit' variant='contained' color='primary'>
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
}
