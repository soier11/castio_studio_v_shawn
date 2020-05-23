import { addLocaleData } from 'react-intl';
import koLang from './entries/ko-KO';
import enLang from './entries/en-US';
import esLang from './entries/es-ES';
import enRtlLang from './entries/en-US-rtl';

const AppLocale = {
    ko:koLang,
    en: enLang,
    es: esLang,
    enrtl:enRtlLang,
};
addLocaleData(AppLocale.ko.data);
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.es.data);
addLocaleData(AppLocale.enrtl.data);

export default AppLocale;
