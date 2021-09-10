const Joi = require('joi');

const listJSON = require('../collections/list.json');

const collectionSchema = Joi.object({
    name: Joi.string().required(),
    symbol: Joi.string().required(),
    address: Joi.string()
    .pattern(new RegExp('^0x[a-fA-F0-9]{40}$')).required(),
    contractURI: Joi.string().uri(),
    website: Joi.string().uri(),
})


const listSchema = Joi.array().items(collectionSchema);


const result = listSchema.validate(listJSON);
if(result.error){
    console.log(result.error);
    throw new Error('Validation failed');
}