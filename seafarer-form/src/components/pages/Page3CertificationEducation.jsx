import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Grid, TextField, Typography, IconButton, Button, Box } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import FormNavigation from '../FormNavigation';

const licenseSchema = yup.object().shape({
    // grade: yup.string().required('Grade is required'),
    // number: yup.string().required('Number is required'),
    // issueDate: yup.string().required('Issue Date is required'),
    // expiry: yup.string().required('Expiry is required'),
    // country: yup.string().required('Country is required'),
});

const schema = yup.object().shape({
    // nationalLicense: yup.array().of(licenseSchema).min(1, 'At least one license is required'),
    // gmdss: yup.array().of(yup.string()),
    // flagState: yup.array().of(yup.string()),
    // trainingCourses: yup.array().of(yup.string()),
    // education: yup.array().of(yup.string()),
    // nextOfKin: yup.array().of(yup.string()),
});

function DynamicFieldArray({ control, name, label, placeholder, errors }) {
    const { fields, append, remove } = useFieldArray({ control, name });
    return (
        <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2">{label}</Typography>
            {fields.map((item, idx) => (
                <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Controller name={`${name}[${idx}]`} control={control} render={({ field }) => (
                        <TextField {...field} placeholder={placeholder} size="small" sx={{ flex: 1 }} error={!!errors?.[idx]} helperText={errors?.[idx]?.message} />
                    )} />
                    <IconButton onClick={() => remove(idx)} disabled={fields.length === 1}><Remove /></IconButton>
                </Box>
            ))}
            <Button onClick={() => append('')} startIcon={<Add />} size="small">Add</Button>
        </Box>
    );
}

function LicenseFieldArray({ control, errors }) {
    const { fields, append, remove } = useFieldArray({ control, name: 'nationalLicense' });
    return (
        <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2">National License / CoC / Endorsement</Typography>
            {fields.map((item, idx) => (
                <Grid container spacing={1} key={item.id} alignItems="center">
                    <Grid item xs={12} sm={2}>
                        <Controller name={`nationalLicense[${idx}].grade`} control={control} render={({ field }) => (
                            <TextField {...field} label="Grade" size="small" fullWidth error={!!errors?.[idx]?.grade} helperText={errors?.[idx]?.grade?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Controller name={`nationalLicense[${idx}].number`} control={control} render={({ field }) => (
                            <TextField {...field} label="Number" size="small" fullWidth error={!!errors?.[idx]?.number} helperText={errors?.[idx]?.number?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Controller name={`nationalLicense[${idx}].issueDate`} control={control} render={({ field }) => (
                            <TextField {...field} label="Issue Date" type="date" InputLabelProps={{ shrink: true }} size="small" fullWidth error={!!errors?.[idx]?.issueDate} helperText={errors?.[idx]?.issueDate?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Controller name={`nationalLicense[${idx}].expiry`} control={control} render={({ field }) => (
                            <TextField {...field} label="Expiry" type="date" InputLabelProps={{ shrink: true }} size="small" fullWidth error={!!errors?.[idx]?.expiry} helperText={errors?.[idx]?.expiry?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Controller name={`nationalLicense[${idx}].country`} control={control} render={({ field }) => (
                            <TextField {...field} label="Country" size="small" fullWidth error={!!errors?.[idx]?.country} helperText={errors?.[idx]?.country?.message} />
                        )} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <IconButton onClick={() => remove(idx)} disabled={fields.length === 1}><Remove /></IconButton>
                    </Grid>
                </Grid>
            ))}
            <Button onClick={() => append({ grade: '', number: '', issueDate: '', expiry: '', country: '' })} startIcon={<Add />} size="small">Add License</Button>
        </Box>
    );
}

export default function Page3CertificationEducation({ defaultValues, onNext, onBack }) {
    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues,
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        onNext(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Typography variant="h6" gutterBottom>Certification & Education</Typography>
            <LicenseFieldArray control={control} errors={errors.nationalLicense} />
            <DynamicFieldArray control={control} name="gmdss" label="GMDSS / Marine High Voltage (Optional)" placeholder="Enter GMDSS/High Voltage" errors={errors.gmdss} />
            <DynamicFieldArray control={control} name="flagState" label="Flag State CoC / Endorsement (Optional)" placeholder="Enter Flag State CoC/Endorsement" errors={errors.flagState} />
            <DynamicFieldArray control={control} name="trainingCourses" label="Training / Upgrading Courses (Optional)" placeholder="Enter Course" errors={errors.trainingCourses} />
            <DynamicFieldArray control={control} name="education" label="Education / Academic Qualifications (Optional)" placeholder="Enter Qualification" errors={errors.education} />
            <DynamicFieldArray control={control} name="nextOfKin" label="Family / Next of Kin Details (Optional)" placeholder="Enter Next of Kin Detail" errors={errors.nextOfKin} />
            <FormNavigation onBack={onBack} isSubmitting={isSubmitting} />
        </form>
    );
} 