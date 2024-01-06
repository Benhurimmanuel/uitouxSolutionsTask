const Joi = require('joi');

// const signUpSchema = Joi.object({
//   email: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   password: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .min(6)
//     .max(30)
//     .required(),
//   fullName: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
// });

// const signInSchema = Joi.object({
//   email: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   password: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .min(6)
//     .max(30)
//     .required(),
// });

// const addSubAdminSchema = Joi.object({
//   email: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   fullName: Joi.string().required(),
//   phoneNumber: Joi.string().required(),
// });

// const createAdsSchema = Joi.object({
//   tags: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   pageLink: Joi.string().invalid(...['null', 'undefined']),
//   deviceType: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   isAdLive: Joi.boolean(),
//   cityDetailsFk: Joi.string(),
// });

// const updateAdsSchema = Joi.object({
//   tags: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   pageLink: Joi.string().invalid(...['null', 'undefined']),
// });

const createCategorySchema = Joi.object({
  categoryName: Joi.string()
    .invalid(...['null', 'undefined'])
    .required(),
  categoryDescription: Joi.string()
    .invalid(...['null', 'undefined'])
    .required(),
  categoryImage: Joi.string()
    .invalid(...['null', 'undefined'])
    .required(),
});
// const updateProductCategorySchema = Joi.object({
//   productCategoryName: Joi.string().invalid(...['null', 'undefined']),
//   productCategoryDescription: Joi.string().invalid(...['null', 'undefined']),
// });


// ****************** Product ******************
const createProductSchema = Joi.object({
  productName: Joi.string()
    .invalid(...['null', 'undefined'])
    .required(),
  productDescription: Joi.string()
    .invalid(...['null', 'undefined'])
    .required(),
  productImage: Joi.string()
    .invalid(...['null', 'undefined'])
    .required(),
  productPrice: Joi.number().required().invalid(0),
  quantityAvailable: Joi.number().required()
});

// // offers
// const updateOfferSchema = Joi.object({
//   isDeleted: Joi.boolean(),
//   adminRemarks: Joi.string().invalid(...['null', 'undefined']),
//   isOfferExpired: Joi.boolean(),
//   isOfferLive: Joi.boolean(),
//   isOfferPromoted: Joi.boolean(),
//   offerApprovalStatus: Joi.number().valid(...[2, 3, 4]),
// });

// const updateSingleCompanyKycSchema = Joi.object({
//   companyApprovalStatus: Joi.number().valid(...[1, 2, 0]),
//   muqqablaRemarks: Joi.string().invalid(...['null', 'undefined']),
// });

// const countrySchema = Joi.object({
//   countryName: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   countryCode: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
// });

// const stateSchema = Joi.object({
//   stateName: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   stateCode: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
// });

// const citySchema = Joi.object({
//   cityName: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   cityCode: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
// });


// const updateProductSchema = Joi.object({
//   productName: Joi.string().invalid(...['null', 'undefined']),
//   productDescription: Joi.string().invalid(...['null', 'undefined']),
//   brandName: Joi.string().invalid(...['null', 'undefined']),
//   productPrice: Joi.number().invalid(0),
//   productSchema: Joi.string().invalid(...['null', 'undefined']),
//   hsnCode: Joi.string().allow(...['', null]),
//   isOfferAvailable: Joi.boolean(),
//   offerStartDate: Joi.string().allow(...['', null]),
//   offerEndDate: Joi.string()
//     .allow(...['', null])
//     .invalid(100),
//   discountPercentage: Joi.number().invalid(...[0, 100, null, '']),
//   totalStockOnOffer: Joi.number().allow(...['', null]),
//   isDeliveryAvailable: Joi.boolean(),
//   isReturnDetailsAvailable: Joi.boolean(),
//   selectedDays: Joi.string().invalid(...['null', 'undefined']),
//   gstPercentage: Joi.number(),
//   productSubCategoryProductSubCategoryId: Joi.string(),
// });

// const createAddProdSchema = Joi.object({
//   productDimension: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   productWeight: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   deliveryInstruction: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   returnPolicy: Joi.string().allow(null).allow(''),
//   returnDays: Joi.number().allow(null).allow(''),
// });

// const addImageSchema = Joi.object({
//   fileName: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   fileUploadUrl: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   isDisplayPicture: Joi.boolean().required(),
// });

// const adminUpdateBugBountyAndFeatureReportsSchema = Joi.object({
//   priority: Joi.string().valid(...['high', 'medium', 'low']),
//   adminRemarks: Joi.string(),
//   status: Joi.string().valid(...['open', 'closed', 'in-review']),
// });

// const adminSendPushNotif = Joi.object({
//   title: Joi.string().required(),
//   body: Joi.string().required(),
//   notificationToAll: Joi.boolean().required(),
//   FCMTokenList: Joi.array(),
// });

// const adminGetProductBasedOnFilterSchema = Joi.object({
//   brandName: Joi.string().allow(null).allow(''),
//   storeName: Joi.string().allow(null).allow(''),
//   productName: Joi.string().allow(null).allow(''),
//   isOfferLive: Joi.boolean(),
//   isOfferAvailable: Joi.boolean(),
//   isDeliveryAvailable: Joi.boolean(),
//   isDeleted: Joi.boolean(),
//   createdAtStart: Joi.string().allow(null).allow(''),
//   createdAtEnd: Joi.string().allow(null).allow(''),
//   priceRangeStart: Joi.string(),
//   priceRangeEnd: Joi.string(),
//   pageSize: Joi.number(),
//   pageNumber: Joi.number(),
//   selectCity: Joi.string(),
//   categoryId: Joi.string(),
//   subCategoryId: Joi.string(),
// });

// const regionSchema = Joi.object({
//   regionName: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
// });

// const addAdminRegionRoleDetailsSchema = Joi.object({
//   adminRoleAdminRolesId: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   cityDetailCityId: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   adminRegistrationAdminRegistrationId: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
// });

// const updateAdminRegionRoleDetailsSchema = Joi.object({
//   adminRoleAdminRolesId: Joi.string().invalid(...['null', 'undefined']),
//   cityDetailCityId: Joi.string().invalid(...['null', 'undefined']),
// });

// const addAdminRolesSchema = Joi.object({
//   roleName: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   apiList: Joi.array()
//     .items(Joi.string().invalid(...['null', 'undefined']))
//     .required(),
// });

// const updateAdminRolesSchema = Joi.object({
//   roleName: Joi.string().invalid(...['null', 'undefined']),
//   apiList: Joi.array().items(Joi.string().invalid(...['null', 'undefined'])),
// });

// const updateAdminProfileDetailsSchema = Joi.object({
//   fullName: Joi.string().invalid(...['null', 'undefined']),
//   isActive: Joi.boolean(),
// });

// const createServiceSchema = Joi.object({
//   serviceName: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   serviceDescription: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   servicePrice: Joi.number().required().invalid(0),
//   serviceSchema: Joi.string().invalid(...['null', 'undefined']),
//   isOfferAvailable: Joi.boolean().required(),
//   offerStartDate: Joi.string().allow(...['', null]),
//   offerEndDate: Joi.string().allow(...['', null]),
//   discountPercentage: Joi.number().invalid(...[0, 100, null, '']),
//   isDepositPercentage: Joi.boolean().required(),
//   depositValue: Joi.number().allow(...['', null]),
//   productSubCategoryFk: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   selectedDays: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   gstPercentage: Joi.number(),
//   isOfferPromoted: Joi.boolean(),
// });

// const updateServiceSchema = Joi.object({
//   serviceName: Joi.string().invalid(...['null', 'undefined']),
//   serviceDescription: Joi.string().invalid(...['null', 'undefined']),
//   servicePrice: Joi.number().invalid(0),
//   serviceSchema: Joi.string().invalid(...['null', 'undefined']),
//   isOfferAvailable: Joi.boolean(),
//   offerStartDate: Joi.string().allow(...['', null]),
//   offerEndDate: Joi.string().allow(...['', null]),
//   discountPercentage: Joi.number().invalid(...[0, 100, null, '']),
//   isDepositPercentage: Joi.boolean(),
//   depositValue: Joi.number().allow(...['', null]),
//   productSubCategoryFk: Joi.string().invalid(...['null', 'undefined']),
//   selectedDays: Joi.string().invalid(...['null', 'undefined']),
//   gstPercentage: Joi.number(),
//   isOfferPromoted: Joi.boolean(),
// });

// const updateServiceApprovalSchema = Joi.object({
//   approvalStatus: Joi.number()
//     .valid(...[0, 1, 2])
//     .required(),
//   adminRemark: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   adminResponseDate: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   isServiceApproval: Joi.boolean().valid(true),
// });

// const adminGetServiceBasedOnFilterSchema = Joi.object({
//   storeName: Joi.string().allow(null).allow(''),
//   serviceName: Joi.string().allow(null).allow(''),
//   isOfferLive: Joi.boolean(),
//   isOfferAvailable: Joi.boolean(),
//   isDeleted: Joi.boolean(),
//   createdAtStart: Joi.string().allow(null).allow(''),
//   createdAtEnd: Joi.string().allow(null).allow(''),
//   priceRangeStart: Joi.number(),
//   priceRangeEnd: Joi.number(),
//   pageSize: Joi.number(),
//   pageNumber: Joi.number(),
//   selectCity: Joi.string(),
//   categoryId: Joi.string(),
//   subCategoryId: Joi.string(),
// });

// const insertAdminRoleAccessSchema = Joi.object({
//   accessApiList: Joi.array(),
// });
// const deleteAdminRoleAccessSchema = Joi.object({
//   accessApi: Joi.string(),
// });

// const resetTempAdminPasswordSchema = Joi.object({
//   newPassword: Joi.string().invalid(...['null', 'undefined']),
//   currentPassword: Joi.string(),
//   adminId: Joi.string(),
// });

// const vendorClaimsGetSchema = Joi.object({
//   startDate: Joi.string().required(),
//   endDate: Joi.string().required(),
// });

// const updateSettlementSchema = Joi.object({
//   settlementDate: Joi.string().invalid(...['null', 'undefined']),
//   settlementAmount: Joi.number().invalid(...['null', 'undefined']),
//   modeOfPayment: Joi.string().invalid(...['null', 'undefined']),
//   settlementStatus: Joi.number().invalid(...['null', 'undefined']),
//   adminRegistrationFk: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   remarks: Joi.string().invalid(...['null', 'undefined']),
// });

// const createRedeemStoreProductSchema = Joi.object({
//   productName: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   productDescription: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   brandName: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   productPrice: Joi.number().required(),
//   productSchema: Joi.string().invalid(...['null', 'undefined']),
//   hsnCode: Joi.string().allow(null).allow(''),
//   totalStockOnOffer: Joi.number().allow(...['', null]),
//   productSubCategoryId: Joi.string()
//     .invalid(...['null', 'undefined'])
//     .required(),
//   // isReturnAvailable: Joi.boolean().required(),
//   country: Joi.string()
//     .invalid(...['null', 'undefined', ''])
//     .required(),
//   gstPercentage: Joi.number(),
// });

// const updateRedeemStoreProductSchema = Joi.object({
//   productName: Joi.string().invalid(...['null', 'undefined']),
//   productDescription: Joi.string().invalid(...['null', 'undefined']),
//   brandName: Joi.string().invalid(...['null', 'undefined']),
//   productPrice: Joi.number(),
//   productSchema: Joi.string().invalid(...['null', 'undefined']),
//   hsnCode: Joi.string().allow(null).allow(''),
//   totalStockOnOffer: Joi.number().allow(...['', null]),
//   isReturnAvailable: Joi.boolean(),
//   gstPercentage: Joi.number(),
//   productSubCategoryFk: Joi.string(),
// });
// const couponAddSchema = Joi.object({
//   couponName: Joi.string().required(),
//   maxNoOfCoupons: Joi.number().required(),
//   minPriceToAvail: Joi.number().required(),
//   discountValue: Joi.number().required(),
//   remarks: Joi.string().allow(...['', null]),
//   countryDetailsFk: Joi.string().required(),
//   isCouponPercentage: Joi.boolean().required(),
//   maxUpto: Joi.number().required(),
// });

// const couponUpdateSchema = Joi.object({
//   couponName: Joi.string(),
//   maxNoOfCoupons: Joi.number(),
//   minPriceToAvail: Joi.number(),
//   discountValue: Joi.number(),
//   isCouponPercentage: Joi.boolean(),
//   maxUpto: Joi.number(),
//   remarks: Joi.string().allow(...['', null]),
// });
// const updateRedeemStorePurchaseSchema = Joi.object({
//   orderStatus: Joi.object(),
//   remarks: Joi.string().allow(...['', null]),
//   expectedDelivery: Joi.string(),
//   trackingId: Joi.string(),
//   deliveryPartner: Joi.string(),
// });
module.exports = {
  createCategorySchema,
  createProductSchema

};
