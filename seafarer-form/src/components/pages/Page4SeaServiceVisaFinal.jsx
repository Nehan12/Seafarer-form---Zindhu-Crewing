import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Grid, TextField, Typography, IconButton, Button, Box, MenuItem } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import FormNavigation from '../FormNavigation';

const visaSchema = yup.object().shape({
    // issueDate: yup.string().nullable(),
    // expiry: yup.string().nullable(),
    // place: yup.string().nullable(),
});

const seaServiceSchema = yup.object().shape({
    // vessel: yup.string().required('Vessel is required'),
    // rank: yup.string().required('Rank is required'),
    // from: yup.string().required('From date is required'),
    // to: yup.string().required('To date is required'),
    // company: yup.string().required('Company is required'),
});

const schema = yup.object().shape({
    // usaVisa: visaSchema,
    // mcvVisa: visaSchema,
    // dateAvailable: yup.string().required('Date Available to Join is required'),
    // seaService: yup.array().of(seaServiceSchema),
    // remarks: yup.string().nullable(),
    // heardAbout: yup.string().required('This field is required'),
});

const heardOptions = [
    'Website',
    'Social Media',
    'Friend/Colleague',
    'Other',
];

function SeaServiceFieldArray({ control, errors }) {
    const { fields, append, remove } = useFieldArray({ control, name: 'seaService' });
    return (
        <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2">Sea Service Record</Typography>
            {fields.map((item, idx) => (
                <Grid container spacing={1} key={item.id} alignItems="center">
                    <Grid item xs={12} sm={2}>
                        <Controller name={`seaService[${idx}].vessel`} control={control} render={({ field }) => (
                            <TextField {...field} label="Vessel" size="small" fullWidth error={!!errors?.[idx]?.vessel} helperText={errors?.[idx]?.vessel?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Controller name={`seaService[${idx}].rank`} control={control} render={({ field }) => (
                            <TextField {...field} label="Rank" size="small" fullWidth error={!!errors?.[idx]?.rank} helperText={errors?.[idx]?.rank?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Controller name={`seaService[${idx}].from`} control={control} render={({ field }) => (
                            <TextField {...field} label="From" type="date" InputLabelProps={{ shrink: true }} size="small" fullWidth error={!!errors?.[idx]?.from} helperText={errors?.[idx]?.from?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Controller name={`seaService[${idx}].to`} control={control} render={({ field }) => (
                            <TextField {...field} label="To" type="date" InputLabelProps={{ shrink: true }} size="small" fullWidth error={!!errors?.[idx]?.to} helperText={errors?.[idx]?.to?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Controller name={`seaService[${idx}].company`} control={control} render={({ field }) => (
                            <TextField {...field} label="Company" size="small" fullWidth error={!!errors?.[idx]?.company} helperText={errors?.[idx]?.company?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <IconButton onClick={() => remove(idx)} disabled={fields.length === 1}><Remove /></IconButton>
                    </Grid>
                </Grid>
            ))}
            <Button onClick={() => append({ vessel: '', rank: '', from: '', to: '', company: '' })} startIcon={<Add />} size="small">Add Record</Button>
        </Box>
    );
}

export default function Page4SeaServiceVisaFinal({ defaultValues, onBack, onSubmit }) {
    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues,
        resolver: yupResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Typography variant="h6" gutterBottom>Sea Service, Visa, & Final Info</Typography>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>Visa Details</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Controller name="usaVisa.issueDate" control={control} render={({ field }) => (
                        <TextField {...field} label="USA Visa Issue Date" type="date" InputLabelProps={{ shrink: true }} fullWidth error={!!errors.usaVisa?.issueDate} helperText={errors.usaVisa?.issueDate?.message} />
                    )} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Controller name="usaVisa.expiry" control={control} render={({ field }) => (
                        <TextField {...field} label="USA Visa Expiry" type="date" InputLabelProps={{ shrink: true }} fullWidth error={!!errors.usaVisa?.expiry} helperText={errors.usaVisa?.expiry?.message} />
                    )} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Controller name="usaVisa.place" control={control} render={({ field }) => (
                        <TextField {...field} label="USA Visa Place" fullWidth error={!!errors.usaVisa?.place} helperText={errors.usaVisa?.place?.message} />
                    )} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Controller name="mcvVisa.issueDate" control={control} render={({ field }) => (
                        <TextField {...field} label="MCV Visa Issue Date" type="date" InputLabelProps={{ shrink: true }} fullWidth error={!!errors.mcvVisa?.issueDate} helperText={errors.mcvVisa?.issueDate?.message} />
                    )} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Controller name="mcvVisa.expiry" control={control} render={({ field }) => (
                        <TextField {...field} label="MCV Visa Expiry" type="date" InputLabelProps={{ shrink: true }} fullWidth error={!!errors.mcvVisa?.expiry} helperText={errors.mcvVisa?.expiry?.message} />
                    )} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Controller name="mcvVisa.place" control={control} render={({ field }) => (
                        <TextField {...field} label="MCV Visa Place" fullWidth error={!!errors.mcvVisa?.place} helperText={errors.mcvVisa?.place?.message} />
                    )} />
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6}>
                    <Controller name="dateAvailable" control={control} render={({ field }) => (
                        <TextField {...field} label="Date Available to Join" type="date" InputLabelProps={{ shrink: true }} fullWidth error={!!errors.dateAvailable} helperText={errors.dateAvailable?.message} />
                    )} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller name="heardAbout" control={control} render={({ field }) => (
                        <TextField {...field} label="How you heard about Dev Marine Agencies" select fullWidth error={!!errors.heardAbout} helperText={errors.heardAbout?.message}>
                            {heardOptions.map((option) => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))}
                        </TextField>
                    )} />
                </Grid>
            </Grid>
            <SeaServiceFieldArray control={control} errors={errors.seaService} />
            <Controller name="remarks" control={control} render={({ field }) => (
                <TextField {...field} label="Any Remarks" fullWidth multiline minRows={2} sx={{ mt: 2 }} />
            )} />
            <FormNavigation onBack={onBack} isLast isSubmitting={isSubmitting} />
        </form>
    );
} 