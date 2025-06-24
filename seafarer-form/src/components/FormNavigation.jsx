import React from 'react';
import { Box, Button } from '@mui/material';

export default function FormNavigation({ onBack, onNext, isLast, isFirst, isSubmitting, nextLabel = 'Next', backLabel = 'Back' }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button variant="outlined" onClick={onBack} disabled={isFirst}>
                {backLabel}
            </Button>
            <Button variant="contained" type="submit" disabled={isSubmitting}>
                {isLast ? 'Submit' : nextLabel}
            </Button>
        </Box>
    );
} 