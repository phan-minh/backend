import ajv from '../utils/ajv';
const userSchema = {
    type:'object',
    properties:{
        email:{type:'string',format:'email'},
        name:{type:'string'},
        age:{type:'number'},
        location:{type:'string'},
        job:{type:'string'},
    },
    required:['email','name','age','location','job'],
    additionalProperties:false,
}

export default ajv.compile(userSchema);