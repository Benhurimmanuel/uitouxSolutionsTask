const newVendorSendOTPDoc = require('./AUTH/VENDOR/newVendorSendOTPDoc');
const newVendorVerifyOTPDoc = require('./AUTH/VENDOR/newVendorVerifyOTPDoc');
const signUpControllerDoc = require('./AUTH/VENDOR/vendorSendOTPDoc');
const vendorVerifyOTPDoc = require('./AUTH/VENDOR/vendorVerifyOTPDoc');
const getVendorRefreshTokenDoc = require('./AUTH/VENDOR/getVendorRefreshTokenDoc.js');

const getSingleVendorProfileControllerDoc = require('./PROFILE/VENDOR/getSingleVendorProfileControllerDoc');
const updateSingleVendorProfileControllerDoc = require('./PROFILE/VENDOR/updateSingleVendorProfileControllerDoc');
const deleteSingleProfileControllerDoc = require('./PROFILE/VENDOR/deleteSingleProfileControllerDoc');

const createCompanyDoc = require('./COMPANY/addCompanyDetailsDoc');
const getSingleCompanyDetailDoc = require('./COMPANY/getSingleCompanyDetailDoc');
const updateCompanyDetailDoc = require('./COMPANY/updateCompanyDetailsDoc');

const createBankDoc = require('./BANK_DETAILS/createBankDoc');
const getBankDetailDoc = require('./BANK_DETAILS/getBankDataDoc');
const updateBankDataDoc = require('./BANK_DETAILS/updateBankDataDoc');

const addStoreControllerDoc = require('./STORES/VENDOR/addStoreControllerDoc');
const deleteStoreDetailsDoc = require('./STORES/VENDOR/deleteStoreDetailsDoc');
const getSingleStoreDetailsDoc = require('./STORES/VENDOR/getSingleStoreDetailsDoc');
const updateStoreDetailsDoc = require('./STORES/VENDOR/updateStoreDetailsDoc');
const getManagerAllStoreListControllerDoc = require('./STORES/VENDOR/getManagerAllStoreListControllerDoc');

const checkIfEmployeePresentDoc = require('./EMPLOYEE/checkIfEmployeePresentDoc');
const getSingleEmployeeDetailsDoc = require('./EMPLOYEE/getSingleEmployeeDetailsDoc');
const updateSingleEmployeeDoc = require('./EMPLOYEE/updateSingleEmployeeDoc');
const addEmployeeControllerDoc = require('./EMPLOYEE/addEmployeeControllerDoc');

const getProductAttributeListDoc = require('./DYNAMIC_PRODUCT_SCHEMA/getProductAttributeListDoc');

const getSingleStoreAllEmployeeListDoc = require('./EMPLOYEE/getSingleStoreAllEmployeeListDoc');
const getCompanyEmpoyeeListControllerDoc = require('./EMPLOYEE/getCompanyEmpoyeeListControllerDoc');
const createProductControllerDoc = require('./PRODUCTS/VENDOR/createProductControllerDoc');
const getAllProductControllerDoc = require('./PRODUCTS/VENDOR/getAllProductControllerDoc');
const getSingleProductControllerDoc = require('./PRODUCTS/VENDOR/getSingleProductControllerDoc');
const updateSingleProductControllerDoc = require('./PRODUCTS/VENDOR/updateSingleProductControllerDoc');
const deleteSingleProductControllerDoc = require('./PRODUCTS/VENDOR/deleteSingleProductControllerDoc');
const getSingleProductForEditControllerDoc = require('./PRODUCTS/VENDOR/getSingleProductForEditControllerDoc');
const getSingleProdSubCategAllProductsControllerDoc = require('./PRODUCTS/VENDOR/getSingleProdSubCategAllProductsControllerDoc');
const getSingleStoreAllProductsControllerDoc = require('./PRODUCTS/VENDOR/getSingleStoreAllProductsControllerDoc');
const addProductImagesDocs = require('./IMAGES/addProductImagesDoc');
const deleteProductImageDoc = require('./IMAGES/deleteProductImageDoc');
const vendorSupportTicketControllerDoc = require('./SUPPORT/VENDOR/vendorSupportTicketControllerDoc');
const addBugBountyFeaturerequestDetailDoc = require('./BUG_BOUNTY_FEATURE_REQUEST/addBugBountyFeaturerequestDetailDoc');
const getCustomerDetailsDoc = require('./CUSTOMERS/getCustomerDetailsDoc');
const updateUserDetailsDoc = require('./CUSTOMERS/updateUserDetailsDoc');
const getCustomerAllStoresListDoc = require('./STORES/CUSTOMER/getCustomerAllStoresListDoc');
const getCustomerSingleStoreDetailsDoc = require('./STORES/CUSTOMER/getCustomerSingleStoreDetailsDoc');
const getCustomerSingleStoreAllProductsControllerDoc = require('./PRODUCTS/CUSTOMER/getCustomerSingleStoreAllProductsControllerDoc');
const getCustomerSingleProductControllerDoc = require('./PRODUCTS/CUSTOMER/getCustomerSingleProductControllerDoc');
const getCustomerProductByOfferDoc = require('./PRODUCTS/CUSTOMER/getCustomerProductByOfferDoc');
const getCustomerAllBrandsDoc = require('./PRODUCTS/CUSTOMER/getCustomerAllBrandsDoc');
const addFavoriteProductControllerDoc = require('./FAVORITES/addFavoriteProductControllerDoc');
const addFavoriteStoreControllerDoc = require('./FAVORITES/addFavoriteStoreControllerDoc');
const getFavoriteProductListControllerDoc = require('./FAVORITES/getFavoriteProductListControllerDoc');
const getFavoriteStoresListControllerDoc = require('./FAVORITES/getFavoriteStoresListControllerDoc');
const removeSingleFavoriteControllerDoc = require('./FAVORITES/removeSingleFavoriteControllerDoc');
const getAllCustomerNotificationsDoc = require('./NOTIFICATIONS/getAllCustomerNotifications');
const userReportControllerDoc = require('./SUPPORT/CUSTOMER/userReportControllerDoc');
const userSupportTicketControllerDoc = require('./SUPPORT/CUSTOMER/userSupportTicketControllerDoc');
const customerShareLinkDoc = require('./SHARE/customerShareLinkDoc');
const addCustomerAddressControllerDoc = require('./CUSTOMERS/addCustomerAddressControllerDoc');
const getAllAddressesOfSingleCustomerControllerDoc = require('./CUSTOMERS/getAllAddressesOfSingleCustomerControllerDoc');
const getSingleAddressOfCustomerControllerDoc = require('./CUSTOMERS/getSingleAddressOfCustomerControllerDoc');
const updateSingleAddressControllerDoc = require('./CUSTOMERS/updateSingleAddressControllerDoc');
const updateMakePrmaryAddressControllerDoc = require('./CUSTOMERS/updateMakePrmaryAddressControllerDoc');
const deleteCustomerAddressControllerDoc = require('./CUSTOMERS/deleteCustomerAddressControllerDoc');
const updateRefereeCodeControllerDoc = require('./CUSTOMER_REFERRAL/updateRefereeCodeControllerDoc');
const getCustomerPointsControllerDoc = require('./CUSTOMER_REFERRAL/getCustomerPointsControllerDoc');
const getReferralDetailsControllerDoc = require('./CUSTOMER_REFERRAL/getReferralDetailsControllerDoc');
const paymentCreateNewControllerDoc = require('./PAYMENT/paymentCreateNewControllerDoc');
const paymentVerifyControllerDoc = require('./PAYMENT/paymentProductVerifyControllerDoc');
const customerProductDeliveryEligibilityDoc = require('./PORTER/customerProductDeliveryEligibilityDoc');
const searchProductStoreControllerDoc = require('./SEARCH/searchProductStoreControllerDoc');
const getAllProductsWorthControllerDoc = require('./PRODUCTS/VENDOR/getAllProductsWorthControllerDoc');
const getAllRegionByCityIdControllerDoc = require('./REGION/getAllRegionByCityIdControllerDoc');
const createServiceDoc = require('./SERVICE/VENDOR/createServiceDoc');
const getAllServicesDoc = require('./SERVICE/VENDOR/getAllServicesDoc');
const updateSingleServieDoc = require('./SERVICE/VENDOR/updateSingleServieDoc');
const addImageServicesDoc = require('./SERVICE/VENDOR/addImageServicesDoc');
const deleteImageServicesDoc = require('./SERVICE/VENDOR/deleteImageServicesDoc');
const getSingleStoreAllServicesDoc = require('./SERVICE/VENDOR/getSingleStoreAllServicesDoc');
const getServicesBasedOnFilterDoc = require('./SERVICE/VENDOR/getServicesBasedOnFilterDoc');
const deleteSingleServieDoc = require('./SERVICE/VENDOR/deleteSingleServieDoc');
const makeServiceOfferOfflineDoc = require('./SERVICE/VENDOR/makeServiceOfferOfflineDoc');
const expireServiceOfferOfflineDoc = require('./SERVICE/VENDOR/expireServiceOfferOfflineDoc');
const paymentCreateServiceRazorPaymentControllerDoc = require('./PAYMENT/paymentCreateServiceRazorPaymentControllerDoc');
const paymentProductVerifyControllerDoc = require('./PAYMENT/paymentRazorPayVerifyPaymentControllerDoc');

const bigSavingsRecommendationProductControllerDoc = require('./RECOMMENDATIONS_PRODUCTS/bigSavingsDoc');
const freshDealsRecommendationProductControllerDoc = require('./RECOMMENDATIONS_PRODUCTS/freshDealsDoc');
const offerExpiringTodayRecommendationProductControllerDoc = require('./RECOMMENDATIONS_PRODUCTS/offerExpiringTodayDoc');
const offerInFocusRecommendationProductControllerDoc = require('./RECOMMENDATIONS_PRODUCTS/offerInFocusDoc');
const StoresNearYouRecommendationProductControllerDoc = require('./RECOMMENDATIONS_PRODUCTS/StoresNearYouDoc');
const getAllOffersOfProductCategoriesControllerDoc = require('./RECOMMENDATIONS_PRODUCTS/getAllOffersOfProductCategoriesDoc');
const upcomingOffersRecommendationProductControllerDoc = require('./RECOMMENDATIONS_PRODUCTS/upcomingOffersDoc');

const bigSavingsRecommendationServiceDoc = require('./RECOMMENDATIONS_SERVICES/bigSavingsDoc');
const freshDealsRecommendationServiceDoc = require('./RECOMMENDATIONS_SERVICES/freshDealsDoc');
const offerExpiringTodayRecommendationServiceDoc = require('./RECOMMENDATIONS_SERVICES/offerExpiringTodayDoc');
const offerInFocusRecommendationServiceDoc = require('./RECOMMENDATIONS_SERVICES/offerInFocusDoc');
const StoresNearYouRecommendationServiceDoc = require('./RECOMMENDATIONS_SERVICES/StoresNearYouDoc');
const getAllOffersOfProductCategoriesRecommendationService = require('./RECOMMENDATIONS_SERVICES/getAllOffersOfProductCategoriesDoc');
const upcomingOffersRecommendationServiceDoc = require('./RECOMMENDATIONS_SERVICES/upcomingOffersDoc');
const getCustomerSingleStoreAllServicesDoc = require('./SERVICE/CUSTOMER/getCustomerSingleStoreAllServicesDoc');
const getCustomerSingleServiceDoc = require('./SERVICE/CUSTOMER/getCustomerSingleServiceDoc');

const getCountOfRedeemedAndClaimedByDateDoc = require('./DASHBOARD_ANALYTICS/getCountOfRedeemedAndClaimedByDateDoc');
const getCountOfRedeemedAndClaimedDoc = require('./DASHBOARD_ANALYTICS/getCountOfRedeemedAndClaimedDoc');
const getCountOfServiceAndProductDoc = require('./DASHBOARD_ANALYTICS/getCountOfServiceAndProductDoc');
const getTotalWorthOfProductAndServiceDoc = require('./DASHBOARD_ANALYTICS/getTotalWorthOfProductAndServiceDoc');

const customerGoogleAuthDoc = require('./AUTH/CUSTOMER/customerGoogleAuthDoc');
const sendOTPDoc = require('./AUTH/CUSTOMER/sendOTPDoc');
const verifyOTPDoc = require('./AUTH/CUSTOMER/verifyOTPDoc');
const getRefreshTokenDoc = require('./AUTH/VENDOR/getRefreshTokenDoc');
const getAllPointsOfUserDoc = require('./PROFILE/CUSTOMER/getAllPointsOfUserDoc');
const getUserReferralCodeDoc = require('./PROFILE/CUSTOMER/getUserReferralCodeDoc');
const updateRefereeCodeDoc = require('./PROFILE/CUSTOMER/updateRefereeCodeDoc');
const addReviewImagesDoc = require('./REVIEWS/addReviewImagesDoc');
const addUserReviewDoc = require('./REVIEWS/addUserReviewDoc');
const deleteImageReviewsDoc = require('./REVIEWS/deleteImageReviewsDoc');
const deleteReviewDoc = require('./REVIEWS/deleteReviewDoc');
const getAllReviewDoc = require('./REVIEWS/getAllReviewDoc');
const getReviewDetailsDoc = require('./REVIEWS/getReviewDetailsDoc');
const getSingleReviewDoc = require('./REVIEWS/getSingleReviewDoc');
const updateReviewDoc = require('./REVIEWS/updateReviewDoc');
const checkUserEligibiltyForCouponDoc = require('./COUPON/checkUserEligibiltyForCouponDoc');
const getCouponDetailsByCountryDoc = require('./COUPON/getCouponDetailsByCountryDoc');

module.exports = {
    paths: {

        //  product category
        // '/api/v5/common/productcategories/getallproductCategories': { ...getProductCategoriesDoc },
        // '/api/v5/common/productcategories/{productcategoryid}': { ...getSingleProductCategoryDoc },

        // product subcategory
        // // '/api/v5/common/{productcategoryid}/productsubcategories/all': { ...getProductSubCategoriesDoc },
        // // '/api/v5/common/productsubcategories/{productsubcategoryid}': { ...getSingleProductSubCategoryDoc },
        // // // '/api/v5/admin/productSchema/{productSchemaId}': { ...getSingleProductSchemaDoc },

        // **************************** VENDOR *******************************************

        // Vendor Auth
        '/api/v5/common/vendor/auth/newvendor/sendotp': { ...newVendorSendOTPDoc },
        '/api/v5/common/vendor/auth/newvendor/verifyotp': { ...newVendorVerifyOTPDoc },
        '/api/v5/common/vendor/auth/sendotp': { ...signUpControllerDoc },
        '/api/v5/common/vendor/auth/verifyotp': { ...vendorVerifyOTPDoc },
        '/api/v5/common/vendor/auth/otp/refreshtokencheck': { ...getVendorRefreshTokenDoc },

        // Vendor Profile
        '/api/v5/vendor/profile/{employeeid}/details': { ...getSingleVendorProfileControllerDoc },
        '/api/v5/vendor/profile/{employeeid}/update': { ...updateSingleVendorProfileControllerDoc },
        '/api/v5/vendor/profile/deleteaccount': { ...deleteSingleProfileControllerDoc },

        // Vendor Company
        '/api/v5/vendor/company/create': { ...createCompanyDoc },
        '/api/v5/vendor/company/{companyid}/details': { ...getSingleCompanyDetailDoc },
        '/api/v5/vendor/company/{companyid}': { ...updateCompanyDetailDoc },

        // Vendor Bank
        '/api/v5/vendor/companies/bank/{companyid}/create': { ...createBankDoc },
        '/api/v5/vendor/companies/bank/{companyid}/detail': { ...getBankDetailDoc },
        '/api/v5/vendor/companies/bank/{bankid}/update': { ...updateBankDataDoc },

        // Vendor Stores
        '/api/v5/vendor/companies/:companyid/stores/create': { ...addStoreControllerDoc },
        '/api/v5/vendor/companies/stores/:storeid/details': { ...getSingleStoreDetailsDoc },
        '/api/v5/vendor/companies/stores/:storeid/update': { ...updateStoreDetailsDoc },
        '/api/v5/vendor/stores/:storeid/delete': { ...deleteStoreDetailsDoc },
        '/api/v5/vendor/stores/manager/mystoreslist?pageSize=:&pageNumber=': { ...getManagerAllStoreListControllerDoc },
        // '/api/v5/vendor/stores/:storeid/images/add   ': {},
        // '/api/v5/vendor/stores/images/:fileuploadid/delete': {},

        // Vendor Employee
        '/api/v5/vendor/stores/{storeid}/employee/create': { ...addEmployeeControllerDoc },
        '/api/v5/vendor/stores/employee/check-if-present': { ...checkIfEmployeePresentDoc },
        '/api/v5/vendor/stores/{storeid}/employees/all?pageSize=:&pageNumber=': { ...getSingleStoreAllEmployeeListDoc },
        'api/v5/vendor/stores/:storeid/employee/:employeeid/details': { ...getSingleEmployeeDetailsDoc },
        'api/v5/vendor/stores/:storeid/employee/:employeeid/update': { ...updateSingleEmployeeDoc },
        '/api/v5/vendor/company/employees/{employeetype}/list': { ...getCompanyEmpoyeeListControllerDoc },

        // Vendor Products
        '/api/v5/vendor/{storeid}/products/create': { ...createProductControllerDoc },
        '/api/v5/vendor/products/all?pageSize=:&pageNumber=': { ...getAllProductControllerDoc },
        '/api/v5/vendor/products/{productid}/detail': { ...getSingleProductControllerDoc },
        '/api/v5/vendor/products/{productid}/update': { ...updateSingleProductControllerDoc },
        '/api/v5/vendor/products/{productid}/delete': { ...deleteSingleProductControllerDoc },
        '/api/v5/vendor/products/{productid}/edit/details': { ...getSingleProductForEditControllerDoc },
        '/api/v5/vendor/products/productsubcategory/{productsubcategoryid}/all': { ...getSingleProdSubCategAllProductsControllerDoc },
        '/api/v5/vendor/products/store/{storeid}/all?pageSize=:&pageNumber=': { ...getSingleStoreAllProductsControllerDoc },
        '/api/v5/vendor/products/totalworth': { ...getAllProductsWorthControllerDoc },

        // Vendor Service
        '/api/v5/vendor/{storeid}/services/create': { ...createServiceDoc },
        '/api/v5/vendor/services/all??pageSize=:&pageNumber=&': { ...getAllServicesDoc },
        '/api/v5/vendor/services/{serviceid}/details': { ...getAllServicesDoc },
        '/api/v5/vendor/services/{serviceid}/update': { ...updateSingleServieDoc },
        '/api/v5/vendor/services/{serviceid}/delete': { ...deleteSingleServieDoc },
        '/api/v5/vendor/stores/{storeid}/services/all?pageSize=10&pageNumber=0': { ...getSingleStoreAllServicesDoc },
        '/api/v5/vendor/services/filter?&createdAtStart=&createdAtEnd=&storeName=&priceRangeStart=&priceRangeEnd=&productName=&isDeleted=&isOfferLive=&isOfferAvailable=&isDeliveryAvailable=&pageSize=&pageNumber=':
            { ...getServicesBasedOnFilterDoc },
        '/api/v5/vendor/services/{serviceid}/makeofferoffline': { ...makeServiceOfferOfflineDoc },
        '/api/v5/vendor/services/{serviceid}/expiremyoffer': { ...expireServiceOfferOfflineDoc },

        // Vendor Support
        '/api/v5/vendor/support': { ...vendorSupportTicketControllerDoc },

        // Vendor Dashboard
        '/api/v5/vendor/dashboard-analytics/products-services/:{queryType}/count': { ...getCountOfRedeemedAndClaimedByDateDoc },
        '/api/v5/vendor/dashboard-analytics/products-services/:{queryType}/totalworth': { ...getCountOfRedeemedAndClaimedDoc },
        '/api/v5/vendor/dashboard-analytics/:{companyid}/claims/count': { ...getCountOfServiceAndProductDoc },
        '/api/v5/vendor/dashboard-analytics/:{companyid}/claims/count/bydate': { ...getTotalWorthOfProductAndServiceDoc },

        // // Product Attributes/Schema
        // '/api/v5/vendor/{productsubcategoryid}/productattribute/all': { ...getProductAttributeListDoc },

        // // Images
        // '/api/v5/vendor/products/{productid}/images/add': { ...addProductImagesDocs },
        // '/api/v5/vendor/products/images/{imageid}/delete': { ...deleteProductImageDoc },
        // '/api/v5/vendor/services/{serviceid}/images/add': { ...addImageServicesDoc },
        // '/api/v5/vendor/services/images/{imageid}/delete': { ...deleteImageServicesDoc },

        // // bug bounty
        // '/api/v5/common/bounty-feature/add': { ...addBugBountyFeaturerequestDetailDoc },

        // Customer Auth
        '/api/v5/common/customer/auth/google': { ...customerGoogleAuthDoc },
        '/api/v5/common/customer/auth/sendotp': { ...sendOTPDoc },
        '/api/v5/common/customer/auth/verifyotp': { ...verifyOTPDoc },
        '/api/v5/common/customer/auth/otp/refreshtokencheck': { ...getRefreshTokenDoc },
        // facebook signin and signup check again with respect to google payload
        // '/api/v5/common/customer/auth/facebook': { ...customerFacebookAuthDoc },

        // Customer Profile
        '/api/v5/customer/profile': { ...getCustomerDetailsDoc },
        '/api/v5/customer/profile/update': { ...updateUserDetailsDoc },
        '/api/v5/customer/profile/add-address': { ...addCustomerAddressControllerDoc },
        '/api/v5/customer/profile/addresses/all': { ...getAllAddressesOfSingleCustomerControllerDoc },
        '/api/v5/customer/profile/address/{customeraddressid}/details': { ...getSingleAddressOfCustomerControllerDoc },
        '/api/v5/customer/profile/address/{customeraddressid}/update': { ...updateSingleAddressControllerDoc },
        '/api/v5/customer/profile/address/{customeraddressid}/make-primary-address': { ...updateMakePrmaryAddressControllerDoc },
        '/api/v5/customer/profile/address/{customeraddressid}/delete': { ...deleteCustomerAddressControllerDoc },

        // Customer Stores
        '/api/v5/customer/stores/all': { ...getCustomerAllStoresListDoc },
        '/api/v5/customer/stores/{storeid}/details': { ...getCustomerSingleStoreDetailsDoc },
        '/api/v5/customer/stores/{storeid}/products/all?pageSize=:&pageNumber=': { ...getCustomerSingleStoreAllProductsControllerDoc },

        // Customer Products
        '/api/v5/customer/product/{productid}/detail': { ...getCustomerSingleProductControllerDoc },
        '/api/v5/customer/products/{offerpercentage}/bypercentage': { ...getCustomerProductByOfferDoc },
        '/api/v5/customer/products/brand/all': { ...getCustomerAllBrandsDoc },

        // Customer Services
        '/api/v5/customer/stores/{storeid}/services/all': { ...getCustomerSingleStoreAllServicesDoc },
        '/api/v5/customer/services/{serviceid}/detail': { ...getCustomerSingleServiceDoc },

        // Customer Product Recommendations
        '/api/v5/common/recommendations/offers/products/storesnearyou?city=:&region=:pageSize=:&pageNumber=': { ...StoresNearYouRecommendationProductControllerDoc },
        '/api/v5/common/recommendations/offers/products/offersinfocus?city=:&region=:pageSize=:&pageNumber=': { ...offerInFocusRecommendationProductControllerDoc },
        '/api/v5/common/recommendations/offers/products/expiringtoday?city=:&region=:pageSize=:&pageNumber=': { ...offerExpiringTodayRecommendationProductControllerDoc },
        '/api/v5/common/recommendations/offers/products/bigsavings?city=:&region=:pageSize=:&pageNumber=': { ...bigSavingsRecommendationProductControllerDoc },
        '/api/v5/common/recommendations/offers/products/freshdeals?city=:&region=:pageSize=:&pageNumber=': { ...freshDealsRecommendationProductControllerDoc },
        '/api/v5/common/recommendations/offers/products/upcomingoffers?city=:&region=:pageSize=:&pageNumber=': { ...upcomingOffersRecommendationProductControllerDoc },
        '/api/v5/common/recommendations/{productcategoryid}/offers/products/all?city=:&region=:pageSize=:&pageNumber=': { ...getAllOffersOfProductCategoriesControllerDoc },

        // Customer SERVICES Recommendations
        '/api/v5/common/recommendations/offers/services/storesnearyou?city=:&region=:pageSize=:&pageNumber=': { ...StoresNearYouRecommendationServiceDoc },
        '/api/v5/common/recommendations/offers/services/offersinfocus?city=:&region=:pageSize=:&pageNumber=': { ...offerInFocusRecommendationServiceDoc },
        '/api/v5/common/recommendations/offers/services/expiringtoday?city=:&region=:pageSize=:&pageNumber=': { ...offerExpiringTodayRecommendationServiceDoc },
        '/api/v5/common/recommendations/offers/services/bigsavings?city=:&region=:pageSize=:&pageNumber=': { ...bigSavingsRecommendationServiceDoc },
        '/api/v5/common/recommendations/offers/services/freshdeals?city=:&region=:pageSize=:&pageNumber=': { ...freshDealsRecommendationServiceDoc },
        '/api/v5/common/recommendations/offers/services/upcomingoffers?city=:&region=:pageSize=:&pageNumber=': { ...upcomingOffersRecommendationServiceDoc },
        '/api/v5/common/recommendations/{productcategoryid}/offers/services/all?city=:&region=:pageSize=:&pageNumber=': { ...getAllOffersOfProductCategoriesRecommendationService },

        // Customer Payment
        '/api/v5/customer/payment/razorpay/createnew': { ...paymentCreateNewControllerDoc },
        '/api/v5/customer/payment/razorpay/{paymentid}/verifypayment': { ...paymentVerifyControllerDoc },
        '/api/v5/customer/payment/services/razorpay/createnew': { ...paymentCreateServiceRazorPaymentControllerDoc },
        '/api/v5/customer/services/razorpay/{paymentid}/verifypayment': { ...paymentProductVerifyControllerDoc },

        // Reviews
        '/api/v5/reviews/:{queryType}/add': { ...addReviewImagesDoc },
        '/api/v5/reviews/:{reviewid}/delete': { ...addUserReviewDoc },
        '/api/v5/reviews/:{reviewid}/update': { ...deleteImageReviewsDoc },
        '/api/v5/reviews/image/:{reviewid}/add': { ...deleteReviewDoc },
        '/api/v5/reviews/image/delete': { ...getAllReviewDoc },
        '/api/v5/reviews/:{reviewid}/single': { ...getReviewDetailsDoc },
        '/api/v5/reviews/all-user-reviews': { ...getSingleReviewDoc },
        '/api/v5/reviews/:{basketid}/basketdata': { ...updateReviewDoc },

        // Customer Favorites
        '/api/v5/customer/favorites/stores/{storeid}': { ...addFavoriteStoreControllerDoc },
        '/api/v5/customer/favorites/products/{productid}': { ...addFavoriteProductControllerDoc },
        '/api/v5/customer/favorites/stores?pageSize=:&pageNumber=': { ...getFavoriteStoresListControllerDoc },
        '/api/v5/customer/favorites/products?pageSize=:&pageNumber=': { ...getFavoriteProductListControllerDoc },
        '/api/v5/customer/favorites/{favoriteId}/delete': { ...removeSingleFavoriteControllerDoc },

        // Customer Support
        '/api/v5/customer/support': { ...userSupportTicketControllerDoc },
        '/api/v5/customer/support/report': { ...userReportControllerDoc },

        // // Notifications
        // '/api/v5/customer/notifications/all?pageSize=:&pageNumber=': { ...getAllCustomerNotificationsDoc },

        // // Share
        // '/api/v5/customer/share/:sharetype/{storeid}/{productid}/{offerid}': { ...customerShareLinkDoc },

        // // Referral
        // '/api/v5/customer/profile/referral/refereecode': { ...updateRefereeCodeControllerDoc },
        // '/api/v5/customer/profile/points/all': { ...getCustomerPointsControllerDoc },
        // '/api/v5/customer/profile/my-refferal-code': { ...getReferralDetailsControllerDoc },

        // // Search Product/store
        // '/api/v5/customer/search': { ...searchProductStoreControllerDoc },

        // // Region
        // '/api/v5/common/{cityid}/region/all': { ...getAllRegionByCityIdControllerDoc },

        // // // Porter
        // '/api/v5/customer/product/delivery/check-eligibility': { ...customerProductDeliveryEligibilityDoc },

        // // referral points
        // '/api/v5/customer/profile/referral/refereecode': { ...getAllPointsOfUserDoc },
        // '/api/v5/customer/profile/points/all': { ...getUserReferralCodeDoc },
        // '/api/v5/customer/profile/my-refferal-code': { ...updateRefereeCodeDoc },

        // // Coupon
        // '/api/v5/coupon/:{countryid}/country/details': { ...checkUserEligibiltyForCouponDoc },
        // '/api/v5/coupon/:{couponid}/eligibility/check': { ...getCouponDetailsByCountryDoc },

        // // // '/api/v5/admin/productSchema': {
        // // //     ...createProductSchemaDoc,getAllCustomerNotifications
        // // //     ...getProductSchemaListDoc,
        // // // },
    },
};
