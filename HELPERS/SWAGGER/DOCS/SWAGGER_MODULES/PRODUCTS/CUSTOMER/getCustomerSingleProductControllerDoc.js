module.exports = {
  // operation's method
  get: {
    security: [
      {
        Bearer: [],
      },
    ],

    tags: ['Customer | Products'], // operation's tag
    description: 'will give Single products ', // short desc
    operationId: 'getCustomerSingleProduct', // unique operation id
    parameters: [
      {
        name: 'productid', // name of the param
        in: 'path', // location of the param
        schema: {
          $ref: '#/components/schemas/productid', // data model of the param
        },
        required: true, // Mandatory param
        description: 'Product Id', // param desc.
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
              CASE_1: 'WHEN OFFERS NOT AVAILABLE',
              payload: {
                productDetail: [
                  {
                    productId: '06d311d5-7795-4c47-80a8-69855b9a582a',
                    productName: "Nike Kids's WMNS Dart 12 MSL Running Shoes",
                    productDescription: '<ul><li>128GB Internal Storage</li></ul>',
                    brandName: 'Apple',
                    productPrice: 70000,
                    productSchema: '[{"name":"","value":""}]',
                    hsnCode: '',
                    isOfferAvailable: true,
                    offerStartDate: '2023-03-17T10:22:03.000Z',
                    offerEndDate: '2023-04-24T10:22:18.000Z',
                    discountPercentage: 0,
                    isOfferExpired: false,
                    totalStockOnOffer: 100,
                    claimsMade: 0,
                    claimsRedeemed: 0,
                    stockRemainingOnOffer: 100,
                    selectedDays: '{"Sunday":false,"Monday":false,"Tuesday":false,"Wednesday":false,"Thursday":false,"Friday":false,"Saturday":false}',
                    isOfferLive: false,
                    isOfferPromoted: false,
                    approvalStatus: 1,
                    adminResponseDate: null,
                    adminRemark: null,
                    isDeleted: false,
                    isDeliveryAvailable: false,
                    isReturnDetailsAvailable: false,
                    productAddedBy: 'admin',
                    gstPercentage: 0,
                    createdAt: '2023-03-20T05:05:08.482Z',
                    updatedAt: '2023-03-20T05:05:08.482Z',
                    storeDetailStoreId: '13d85372-617a-4a57-8eb2-974fbbf97ba0',
                    productSubCategoryProductSubCategoryId: '3a840bbc-330b-422e-8cd3-ad6ec5790f7b',
                    productSubCategory: {
                      productSubCategoryId: '3a840bbc-330b-422e-8cd3-ad6ec5790f7b',
                      productSubCategoryName: 'Mobile',
                      isDeleted: false,
                      createdAt: '2023-03-16T04:43:55.996Z',
                      updatedAt: '2023-03-20T06:02:46.498Z',
                      productCategoryProductCategoryId: '08003043-cb01-4f7d-a4b8-5325cbc3eb1d',
                      productCategory: {
                        productCategoryId: '08003043-cb01-4f7d-a4b8-5325cbc3eb1d',
                        productCategoryName: 'Electronics',
                        productCategoryDescription: 'all kind of Electronics Products comes under this category',
                        isDeleted: false,
                        createdAt: '2023-03-16T04:43:35.667Z',
                        updatedAt: '2023-03-20T06:01:10.698Z',
                      },
                    },
                    termsConditionsDetails: [],
                    additionalProductDetail: null,
                    fileUploads: [
                      {
                        fileUploadId: 'b8f29e5c-43e4-4660-898b-fca3f5856fb3',
                        fileName: '13d85372-617a-4a57-8eb2-974fbbf97ba0_20_Mar_2023_10_32_22_AM_dp',
                        fileUploadUrl: 'https://muqabala.s3.ap-south-1.amazonaws.com/13d85372-617a-4a57-8eb2-974fbbf97ba0_20_Mar_2023_10_32_22_AM_dp.jpg',
                        isDisplayPicture: true,
                        uploadType: 'image',
                        isDeleted: false,
                        createdAt: '2023-03-20T05:05:08.568Z',
                        updatedAt: '2023-03-20T05:05:08.568Z',
                        productDetailProductId: '06d311d5-7795-4c47-80a8-69855b9a582a',
                        bountyFeatureDetailBountyFeatureDetailId: null,
                      },
                    ],
                    storeDetail: {
                      storeId: '13d85372-617a-4a57-8eb2-974fbbf97ba0',
                      storeName: 'Dhaval Inc.',
                      storeEmail: 'dhaval@infoskies.com',
                      storePhoneNumber: '0',
                      storeAddress: '91springboard, Indiranagar',
                      pincode: '560038',
                      latitude: 12.981612,
                      longitude: 77.645645,
                      gstNumber: 'NA Th-Mar-2023 10:24 am',
                      storeTiming: '[{"label":"Sunday","startTiming":"","endTiming":"","openStatus":"Closed"},{"label":"Monday","startTiming":"2023-03-16T02:30:20.522Z","endTiming":"2023-03-16T16:30:20.522Z","openStatus":""},{"label":"Tuesday","startTiming":"2023-03-16T02:30:20.522Z","endTiming":"2023-03-16T16:30:20.522Z","openStatus":""},{"label":"Wednesday","startTiming":"2023-03-16T02:30:20.522Z","endTiming":"2023-03-16T16:30:20.522Z","openStatus":""},{"label":"Thursday","startTiming":"2023-03-16T02:30:20.522Z","endTiming":"2023-03-16T16:30:20.522Z","openStatus":""},{"label":"Friday","startTiming":"2023-03-16T02:30:20.522Z","endTiming":"2023-03-16T16:30:20.522Z","openStatus":""},{"label":"Saturday","startTiming":"2023-03-16T02:30:20.522Z","endTiming":"2023-03-16T16:30:20.522Z","openStatus":""}]',
                      isStoreProfileCompleted: true,
                      isPrimaryStore: true,
                      isDeleted: false,
                      createdAt: '2023-03-16T04:53:19.073Z',
                      updatedAt: '2023-03-16T04:54:43.019Z',
                      storeCategoryDetailStoreCategoryId: 'dcf6ff0e-a607-4b74-aa84-82e93bfd6580',
                      companyDetailCompanyId: '2e0ebd6d-320f-4e19-a9fb-5827aa385be7',
                      cityDetailCityId: 'd38d55c4-aa6d-4dcd-965b-8a91803392a6',
                      fileUploads: [
                        {
                          fileUploadId: 'c06f7ad8-4b0b-4775-8c9f-dd7633c45bce',
                          fileName: '2e0ebd6d-320f-4e19-a9fb-5827aa385be7_16_Mar_2023_10_24_15_AM_dp',
                          fileUploadUrl: 'https://muqabala.s3.ap-south-1.amazonaws.com/2e0ebd6d-320f-4e19-a9fb-5827aa385be7_16_Mar_2023_10_24_15_AM_dp.jpg',
                          isDisplayPicture: true,
                          uploadType: 'image',
                          isDeleted: false,
                          createdAt: '2023-03-16T04:54:43.253Z',
                          updatedAt: '2023-03-16T04:54:43.253Z',
                          storeDetailStoreId: '13d85372-617a-4a57-8eb2-974fbbf97ba0',
                        },
                      ],
                    },
                    discountedPrice: 70000,
                    isProductFavorite: false,
                  },
                ],
                offerDetail: 'no offer available',
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
