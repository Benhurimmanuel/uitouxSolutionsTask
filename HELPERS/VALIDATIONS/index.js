const Joi = require('joi');
// ****************** Auth ******************

const signUpSchema = Joi.object({
  email: Joi.string().invalid(...['null', 'undefined']).required(),
  password: Joi.string().invalid(...['null', 'undefined']).min(6).max(30).required(),
  fullName: Joi.string().invalid(...['null', 'undefined']).required(),
});

const signInSchema = Joi.object({
  email: Joi.string().invalid(...['null', 'undefined']).required(),
  password: Joi.string().invalid(...['null', 'undefined']).min(6).max(30).required(),
});
// ****************** Ads ******************

const createAdsSchema = Joi.object({
  adTitile: Joi.string().invalid(...['null', 'undefined']).required(),
  adsDescription: Joi.string().invalid(...['null', 'undefined']).required(),
  adsImage: Joi.string().invalid(...['null', 'undefined']).required(),
  adsLink: Joi.string().invalid(...['null', 'undefined']).required()
})

// ****************** Category ******************
const createCategorySchema = Joi.object({
  categoryName: Joi.string().invalid(...['null', 'undefined']).required(),
  categoryDescription: Joi.string().invalid(...['null', 'undefined']).required(),
  categoryImage: Joi.string().invalid(...['null', 'undefined']).required(),
});

// ****************** Product ******************
const createProductSchema = Joi.object({
  productName: Joi.string().invalid(...['null', 'undefined']).required(),
  productDescription: Joi.string().invalid(...['null', 'undefined']).required(),
  productImage: Joi.string().invalid(...['null', 'undefined']).required(),
  productPrice: Joi.number().required().invalid(0),
  quantityAvailable: Joi.number().required(),
  tags: Joi.array().items(Joi.string()).required(),
});

module.exports = {
  signUpSchema,
  signInSchema,
  createAdsSchema,
  createCategorySchema,
  createProductSchema

};
