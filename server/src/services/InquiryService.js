import {bePresent, hasError} from '../utils/tools';
import {query} from '../stores/index';
export const addNewInquiry = async (req, res) => {
    var data = await query('test.select1', {});
    console.log(data)
    return data;
};