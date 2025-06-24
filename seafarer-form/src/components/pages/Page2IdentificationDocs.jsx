import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Grid, TextField, Typography } from '@mui/material';
import FormNavigation from '../FormNavigation';

const schema = yup.object().shape({
    // passportNumber: yup.string().required('Passport Number is required'),
    // passportIssuedPlace: yup.string().required('Issued Place is required'),
    // passportIssuedDate: yup.string().required('Issued Date is required'),
    // passportExpiryDate: yup.string().required('Expiry Date is required'),
    // cdcNumber: yup.string().required('CDC No is required'),
    // cdcIssuedPlace: yup.string().required('Issued Place is required'),
    // cdcIssuedDate: yup.string().required('Issued Date is required'),
    // cdcExpiryDate: yup.string().required('Expiry Date is required'),
    // sidNumber: yup.string().nullable(),
    // sidIssuedPlace: yup.string().nullable(),
    // sidIssuedDate: yup.string().nullable(),
    // sidExpiryDate: yup.string().nullable(),
});

export default function Page2IdentificationDocs({ defaultValues, onNext, onBack }) {
    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues,
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        onNext(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Typography variant="h6" gutterBottom>Identification & Documentation</Typography>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>Passport Details</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Controller name="passportNumber" control={control} render={({ field }) => (
                        <TextField {...field} label="Passport Number *" fullWidth error={!!errors.passportNumber} helperText={errors.passportNumber?.message} />
                    )} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller name="passportIssuedPlace" control={control} render={({ field }) => (
                        <TextField {...field} label="Issued Place *" fullWidth error={!!errors.passportIssuedPlace} helperText={errors.passportIssuedPlace?.message} />
                    )} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller name="passportIssuedDate" control={control} render={({ field }) => (
                        <TextField {...field} label="Issued Date *" type="date" InputLabelProps={{ shrink: true }} fullWidth error={!!errors.passportIssuedDate} helperText={errors.passportIssuedDate?.message} />
                    )} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller name="passportExpiryDate" control={control} render={({ field }) => (
                        <TextField {...field} label="Expiry Date *" type="date" InputLabelProps={{ shrink: true }} fullWidth error={!!errors.passportExpiryDate} helperText={errors.passportExpiryDate?.message} />
                    )} />
                </Grid>
            </Grid>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>CDC Details</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Controller name="cdcNumber" control={control} render={({ field }) => (
                        <TextField {...field} label="CDC No *" fullWidth error={!!errors.cdcNumber} helperText={errors.cdcNumber?.message} />
                    )} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller name="cdcIssuedPlace" control={control} render={({ field }) => (
                        <TextField {...field} label="Issued Place *" fullWidth error={!!errors.cdcIssuedPlace} helperText={errors.cdcIssuedPlace?.message} />
                    )} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller name="cdcIssuedDate" control={control} render={({ field }) => (
                        <TextField {...field} label="Issued Date *" type="date" InputLabelProps={{ shrink: true }} fullWidth error={!!errors.cdcIssuedDate} helperText={errors.cdcIssuedDate?.message} />
                    )} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller name="cdcExpiryDate" control={control} render={({ field }) => (
                        <TextField {...field} label="Expiry Date *" type="date" InputLabelProps={{ shrink: true }} fullWidth error={!!errors.cdcExpiryDate} helperText={errors.cdcExpiryDate?.message} />
                    )} />
                </Grid>
            </Grid>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>SID (Optional)</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Controller name="sidNumber" control={control} render={({ field }) => (
                        <TextField {...field} label="SID No" fullWidth error={!!errors.sidNumber} helperText={errors.sidNumber?.message} />
                    )} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller name="sidIssuedPlace" control={control} render={({ field }) => (
                        <TextField {...field} label="Issued Place" fullWidth error={!!errors.sidIssuedPlace} helperText={errors.sidIssuedPlace?.message} />
                    )} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller name="sidIssuedDate" control={control} render={({ field }) => (
                        <TextField {...field} label="Issued Date" type="date" InputLabelProps={{ shrink: true }} fullWidth error={!!errors.sidIssuedDate} helperText={errors.sidIssuedDate?.message} />
                    )} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller name="sidExpiryDate" control={control} render={({ field }) => (
                        <TextField {...field} label="Expiry Date" type="date" InputLabelProps={{ shrink: true }} fullWidth error={!!errors.sidExpiryDate} helperText={errors.sidExpiryDate?.message} />
                    )} />
                </Grid>
            </Grid>
            <FormNavigation onBack={onBack} isSubmitting={isSubmitting} />
        </form>
    );
} 