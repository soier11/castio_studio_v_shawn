import Language from '../models/Language';

export const bePresent = obj => obj === undefined || obj === null || obj === '' ? false : true;

export const hasError = async (lang_cd = '900-000', lang_tp = 'kr', errStatus = 500) => {
    const errType = await Language.findOne({
        lang_cd, lang_tp
    })
    throw {
        error: errType !== undefined && errType !== null ? errType.lang : '',
        errCode: lang_cd,
        errStatus
    };
};

export const emailValidation = (email = '') => {
    var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return regex.test(email);
};