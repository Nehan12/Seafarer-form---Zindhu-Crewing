import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Grid, TextField, Button, MenuItem, Typography, Avatar, Box } from '@mui/material';
import FormNavigation from '../FormNavigation';

const schema = yup.object().shape({
    // picture: yup.mixed().nullable(),
    // familyName: yup.string().required('Family Name is required'),
    // middleName: yup.string().required('Middle Name is required'),
    // email: yup.string().email('Invalid email').required('Email is required'),
    // nic: yup.string().required('NIC is required'),
    // nationality: yup.string().required('Nationality is required'),
    // placeOfBirth: yup.string().required('Place of Birth is required'),
    // dateOfBirth: yup.string().required('Date of Birth is required'),
    // height: yup.number().typeError('Height must be a number').required('Height is required'),
    // weight: yup.number().typeError('Weight must be a number').required('Weight is required'),
    // maritalStatus: yup.string().required('Marital Status is required'),
    // noOfChildren: yup.number().typeError('No. of Children must be a number').nullable(),
    // telLandline: yup.string().required('Telephone No. (Landline) is required'),
    // telMobile: yup.string().required('Telephone No. (Mobile) is required'),
    // address: yup.string().required('Address / Nearest Airport is required'),
});

const maritalOptions = [
    'Single',
    'Married',
    'Divorced',
    'Widowed',
];

export default function Page1PersonalContact({ defaultValues, onNext }) {
    const [preview, setPreview] = useState(defaultValues.picture || null);
    const { control, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm({
        defaultValues,
        resolver: yupResolver(schema),
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setValue('picture', file);
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = (data) => {
        onNext(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Typography variant="h6" gutterBottom>Personal & Contact Information</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Avatar src={preview} sx={{ width: 80, height: 80, mb: 1 }} />
                        <Button variant="outlined" component="label" size="small">
                            Upload Picture
                            <input type="file" accept="image/*" hidden onChange={handleImageChange} />
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={9} container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Controller name="familyName" control={control} render={({ field }) => (
                            <TextField {...field} label="Family Name *" fullWidth error={!!errors.familyName} helperText={errors.familyName?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller name="middleName" control={control} render={({ field }) => (
                            <TextField {...field} label="Middle Name / Other Names *" fullWidth error={!!errors.middleName} helperText={errors.middleName?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller name="email" control={control} render={({ field }) => (
                            <TextField {...field} label="Email Address *" fullWidth error={!!errors.email} helperText={errors.email?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller name="nic" control={control} render={({ field }) => (
                            <TextField {...field} label="NIC *" fullWidth error={!!errors.nic} helperText={errors.nic?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller name="nationality" control={control} render={({ field }) => (
                            <TextField {...field} label="Nationality *" fullWidth error={!!errors.nationality} helperText={errors.nationality?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller name="placeOfBirth" control={control} render={({ field }) => (
                            <TextField {...field} label="Place of Birth *" fullWidth error={!!errors.placeOfBirth} helperText={errors.placeOfBirth?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller name="dateOfBirth" control={control} render={({ field }) => (
                            <TextField {...field} label="Date of Birth *" type="date" InputLabelProps={{ shrink: true }} fullWidth error={!!errors.dateOfBirth} helperText={errors.dateOfBirth?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Controller name="height" control={control} render={({ field }) => (
                            <TextField {...field} label="Height (cm) *" fullWidth error={!!errors.height} helperText={errors.height?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Controller name="weight" control={control} render={({ field }) => (
                            <TextField {...field} label="Weight (kg) *" fullWidth error={!!errors.weight} helperText={errors.weight?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller name="maritalStatus" control={control} render={({ field }) => (
                            <TextField {...field} label="Marital Status *" select fullWidth error={!!errors.maritalStatus} helperText={errors.maritalStatus?.message}>
                                {maritalOptions.map((option) => (
                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                ))}
                            </TextField>
                        )} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller name="noOfChildren" control={control} render={({ field }) => (
                            <TextField {...field} label="No. of Children" fullWidth error={!!errors.noOfChildren} helperText={errors.noOfChildren?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller name="telLandline" control={control} render={({ field }) => (
                            <TextField {...field} label="Telephone No. (Landline) *" fullWidth error={!!errors.telLandline} helperText={errors.telLandline?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller name="telMobile" control={control} render={({ field }) => (
                            <TextField {...field} label="Telephone No. (Mobile) *" fullWidth error={!!errors.telMobile} helperText={errors.telMobile?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller name="address" control={control} render={({ field }) => (
                            <TextField {...field} label="Address / Nearest Airport" fullWidth error={!!errors.address} helperText={errors.address?.message} />
                        )} />
                    </Grid>
                </Grid>
            </Grid>
            <FormNavigation isFirst onNext={null} isSubmitting={isSubmitting} />
        </form>
    );
} 