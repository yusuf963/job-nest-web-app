import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchLabels() {
    const [isArabic, setIsArabic] = React.useState(false);// might better be null 

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const result = localStorage.getItem('language');
            setIsArabic(result === 'ar');
        }
    }, []);

    const handleLanguageChange = () => {
        if (typeof window !== 'undefined') {
            const newLanguage = isArabic ? null : 'ar'; 
            localStorage.setItem('language', newLanguage);
            setIsArabic(!isArabic);
            window.location.reload()
        }
    };

    return (
        <FormControlLabel
            control={
                <Switch
                    checked={isArabic}
                    onChange={handleLanguageChange}
                />
            }
            label="ظ"
        />
    );
};
