import Ajv from 'ajv';
const addFormats = require('ajv-formats');
const ajv = new Ajv({allErrors:true});

addFormats(ajv);

export default ajv;