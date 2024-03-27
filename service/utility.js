import arLocale from '../config/locales/ar.json';
import enLocale from '../config/locales/en.json';

export function getLocale(language) {
    switch (language) {
        case 'ar':
            return arLocale;
        case 'en':
        default:
            return enLocale;
    }
}
