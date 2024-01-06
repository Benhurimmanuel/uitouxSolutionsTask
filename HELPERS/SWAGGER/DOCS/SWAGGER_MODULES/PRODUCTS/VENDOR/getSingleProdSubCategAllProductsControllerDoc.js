module.exports = {
  // operation's method
  get: {
    security: [
      {
        Bearer: [],
      },
    ],

    tags: ['Vendor | Products'], // operation's tag
    description: 'get product ', // short desc
    operationId: 'getAllProductsOfProdSubCategory', // unique operation id
    parameters: [
      {
        name: 'productsubcategoryid', // name of the param
        in: 'path', // location of the param
        schema: {
          $ref: '#/components/schemas/productsubcategoryid', // data model of the param
        },
        required: true, // Mandatory param
        description: 'Product Sub Category Id', // param desc.
      },
    ], // expected params

    // expected responses
    responses: {
      // response code
      200: {
        content: {
          // content-type
          'application/json': {
            example: {
              payload: {
                count: 10,
                rows: [
                  {
                    productId: 'de83e7cc-7bc5-44b7-8934-18d69a29523c',
                    productName: 'iPhone 15',
                    productDescription: '<ul><li>iPhone 15 Pro Max</li></ul>',
                    brandName: 'Apple',
                    productPrice: 180000,
                    productSchema:
                      '[{"name":"Battery Capacity","value":"4000mAh"}]',
                    hsnCode: '',
                    isOfferAvailable: true,
                    offerStartDate: '2023-02-25T08:38:17.000Z',
                    offerEndDate: '2023-03-25T08:38:22.000Z',
                    discountPercentage: 10,
                    isOfferExpired: false,
                    totalStockOnOffer: 1000,
                    claimsMade: 0,
                    claimsRedeemed: 0,
                    stockRemainingOnOffer: 1000,
                    selectedDays:
                      '{"Sunday":true,"Monday":false,"Tuesday":false,"Wednesday":false,"Thursday":false,"Friday":true,"Saturday":true}',
                    isOfferLive: false,
                    isOfferPromoted: false,
                    approvalStatus: 0,
                    adminResponseDate: null,
                    adminRemark: null,
                    isDeleted: false,
                    isDeliveryAvailable: false,
                    isReturnDetailsAvailable: false,
                    productAddedBy: 'vendor',
                    createdAt: '2023-02-24T08:37:10.760Z',
                    updatedAt: '2023-02-24T08:38:38.153Z',
                    storeDetailStoreId: '1166ec7c-51e7-41fe-b97c-880edc9c4ffc',
                    productSubCategoryProductSubCategoryId:
                      '139b2be8-5d76-47e6-b1c9-ce41c183dced',
                    termsConditionsDetails: [
                      {
                        termsConditionsId:
                          'd4a14b01-5136-4695-9b32-fcbf09aab94f',
                        description: '<p>T&amp;C</p>',
                        isDeleted: false,
                        createdAt: '2023-02-24T08:38:38.323Z',
                        updatedAt: '2023-02-24T08:38:38.323Z',
                        productDetailProductId:
                          'de83e7cc-7bc5-44b7-8934-18d69a29523c',
                      },
                    ],
                    additionalProductDetail: null,
                    fileUploads: [
                      {
                        fileUploadId: '70d2d394-4316-4e1a-983f-7c6510c153b4',
                        fileName:
                          '1166ec7c-51e7-41fe-b97c-880edc9c4ffc_24_Feb_2023_02_06_57_PM_dp',
                        fileUploadUrl:
                          'https://muqabala.s3.ap-south-1.amazonaws.com/1166ec7c-51e7-41fe-b97c-880edc9c4ffc_24_Feb_2023_02_06_57_PM_dp.jpg',
                        isDisplayPicture: true,
                        isDeleted: false,
                        createdAt: '2023-02-24T08:37:10.904Z',
                        updatedAt: '2023-02-24T08:37:10.904Z',
                        storeDetailStoreId: null,
                        productDetailProductId:
                          'de83e7cc-7bc5-44b7-8934-18d69a29523c',
                        storeCategoryDetailStoreCategoryId: null,
                        productCategoryProductCategoryId: null,
                        productSubCategoryProductSubCategoryId: null,
                        adAdsId: null,
                      },
                    ],
                  },
                ],
              },
            },
          },
        },
      },
      // response code
      400: {
        content: {
          // content-type
          'application/json': {
            schema: {
              $ref: '#/components/schemas/400', // todo data model
            },
          },
        },
      },
    },
  },
};
