import React, { useState } from 'react';
import Page1PersonalContact from './pages/Page1PersonalContact';
import Page2IdentificationDocs from './pages/Page2IdentificationDocs';
import Page3CertificationEducation from './pages/Page3CertificationEducation';
import Page4SeaServiceVisaFinal from './pages/Page4SeaServiceVisaFinal';
import { Box, Stepper, Step, StepLabel, Paper } from '@mui/material';
import FormNavigation from './FormNavigation';
import logo from '../assets/logo.png'; // Adjust the path as necessary

const steps = [
    'Personal & Contact',
    'Identification & Docs',
    'Certification & Education',
    'Sea Service & Final',
];

const defaultFormData = {
    // Page 1
    picture: null,
    familyName: '',
    middleName: '',
    email: '',
    nic: '',
    nationality: '',
    placeOfBirth: '',
    dateOfBirth: '',
    height: '',
    weight: '',
    maritalStatus: '',
    noOfChildren: '',
    telLandline: '',
    telMobile: '',
    address: '',
    // Page 2
    passportNumber: '',
    passportIssuedPlace: '',
    passportIssuedDate: '',
    passportExpiryDate: '',
    cdcNumber: '',
    cdcIssuedPlace: '',
    cdcIssuedDate: '',
    cdcExpiryDate: '',
    sidNumber: '',
    sidIssuedPlace: '',
    sidIssuedDate: '',
    sidExpiryDate: '',
    // Page 3
    nationalLicense: [],
    gmdss: [],
    flagState: [],
    trainingCourses: [],
    education: [],
    nextOfKin: [],
    // Page 4
    usaVisa: {},
    mcvVisa: {},
    dateAvailable: '',
    seaService: [],
    remarks: '',
    heardAbout: '',
};

export default function FormWizard() {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState(defaultFormData);

    const handleNext = (data) => {
        setFormData((prev) => ({ ...prev, ...data }));
        setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };

    const handleSubmit = (data) => {
        setFormData((prev) => ({ ...prev, ...data }));
        // TODO: Final submission logic here
        alert('Form submitted!');
    };

    return (
        <Box sx={{ maxWidth: 700, mx: 'auto', mt: 4, mb: 4 }}>
            <div>
                <img src={logo} alt="Dev Marine Agencies" style={{ width: '100px', display: 'block', margin: '0 auto' }} />
            </div>
            <h3 style={{ textAlign: 'center', fontFamily: 'serif' }}>Zindhu Crewing Services (pvt) Ltd</h3>
            <h1 style={{ textAlign: 'center', fontFamily: 'serif' }}>SEAFARER REGISTRATION</h1>
            <Paper sx={{ p: 3 }}>
                
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Box sx={{ mt: 3 }}>
                    {activeStep === 0 && (
                        <Page1PersonalContact defaultValues={formData} onNext={handleNext} />
                    )}
                    {activeStep === 1 && (
                        <Page2IdentificationDocs defaultValues={formData} onNext={handleNext} onBack={handleBack} />
                    )}
                    {activeStep === 2 && (
                        <Page3CertificationEducation defaultValues={formData} onNext={handleNext} onBack={handleBack} />
                    )}
                    {activeStep === 3 && (
                        <Page4SeaServiceVisaFinal defaultValues={formData} onBack={handleBack} onSubmit={handleSubmit} />
                    )}
                </Box>
            </Paper>
        </Box>
    );
} 