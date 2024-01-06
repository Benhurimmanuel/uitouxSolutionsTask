module.exports = {
  // operation's method
  get: {
    security: [
      {
        Bearer: [],
      },
    ],

    tags: ['Vendor | Products'], // operation's tag
    description: 'get Single  product ', // short desc
    operationId: 'getSingleProduct', // unique operation id
    parameters: [
      {
        name: 'productid', // name of the param
        in: 'path', // location of the param
        schema: {
          $ref: '#/components/schemas/productid', // data model of the param
        },
        required: true, // Mandatory param
        description: 'Product  Id', // param desc.
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
                productId: 'f21635b2-ac3a-45dc-81d7-b4773753aaa6',
                productName: "MacBook Pro 14'",
                productDescription:
                  '<p>Apple MacBook Pro</p><p><br></p><p>14 inch Display</p><p><br></p><p>512GB SSD</p><p><br></p><p>8GB RAM</p>',
                brandName: 'Apple',
                productPrice: 200000,
                productSchema: '[{"name":"Inch","value":"14.4\\""}]',
                hsnCode: '84713090',
                isOfferAvailable: true,
                offerStartDate: '2023-01-15T09:40:53.000Z',
                offerEndDate: '2023-01-31T09:40:53.000Z',
                discountPercentage: 18,
                isOfferExpired: true,
                totalStockOnOffer: 50,
                claimsMade: 0,
                claimsRedeemed: 0,
                stockRemainingOnOffer: 50,
                selectedDays: null,
                isOfferLive: false,
                isOfferPromoted: false,
                approvalStatus: 0,
                adminResponseDate: null,
                adminRemark: null,
                isDeleted: false,
                isDeliveryAvailable: true,
                isReturnDetailsAvailable: true,
                productAddedBy: 'vendor',
                createdAt: '2022-12-26T09:58:39.631Z',
                updatedAt: '2023-01-12T10:06:20.245Z',
                storeDetailStoreId: '1166ec7c-51e7-41fe-b97c-880edc9c4ffc',
                productSubCategoryProductSubCategoryId:
                  '3cab742f-caff-45c6-bfd0-ba056950bc55',
                termsConditionsDetails: [
                  {
                    termsConditionsId: 'eb32605c-564c-4862-a56c-7c051ebef481',
                    description: '<p>hello</p>',
                    isDeleted: false,
                    createdAt: '2023-01-10T09:30:13.949Z',
                    updatedAt: '2023-01-12T10:06:20.366Z',
                    productDetailProductId:
                      'f21635b2-ac3a-45dc-81d7-b4773753aaa6',
                  },
                ],
                additionalProductDetail: {
                  additionalProductDetailsId:
                    'c6d6f819-9880-4f91-b4c6-e5620fed7c23',
                  productDimension: '50cm x 50cm x 50cm',
                  productWeight: '1.',
                  deliveryInstruction: 'Handle with Care',
                  returnPolicy:
                    '<p>Return will only be accepted if the Product comes with Manufacturing Defect</p>',
                  returnDays: 7,
                  isDeleted: false,
                  createdAt: '2022-12-26T09:58:39.811Z',
                  updatedAt: '2023-01-12T10:06:20.496Z',
                  productDetailProductId:
                    'f21635b2-ac3a-45dc-81d7-b4773753aaa6',
                },
                fileUploads: [
                  {
                    fileUploadId: 'a602c82b-3869-493e-9e3d-b6a8a15a0b7c',
                    fileName: 'apple_macbook_pro_14_inch_m1_chip',
                    fileUploadUrl:
                      'https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg',
                    isDisplayPicture: true,
                    isDeleted: false,
                    createdAt: '2022-12-26T09:58:39.708Z',
                    updatedAt: '2022-12-26T09:58:39.708Z',
                    storeDetailStoreId: null,
                    productDetailProductId:
                      'f21635b2-ac3a-45dc-81d7-b4773753aaa6',
                    storeCategoryDetailStoreCategoryId: null,
                    productCategoryProductCategoryId: null,
                    productSubCategoryProductSubCategoryId: null,
                    adAdsId: null,
                  },
                ],
                productSubCategory: {
                  productSubCategoryId: '3cab742f-caff-45c6-bfd0-ba056950bc55',
                  productSubCategoryName: 'Laptop',
                  isDeleted: false,
                  createdAt: '2022-12-26T05:46:01.798Z',
                  updatedAt: '2022-12-26T07:16:26.279Z',
                  productCategoryProductCategoryId:
                    '77387fd4-155b-42d1-8ec0-0956522f67d0',
                  productCategory: {
                    productCategoryId: '77387fd4-155b-42d1-8ec0-0956522f67d0',
                    productCategoryName: 'Electronics',
                    productCategoryDescription:
                      'TV, Refrigerator, Laptop, etc falls under this category',
                    isDeleted: false,
                    createdAt: '2022-12-23T12:12:12.704Z',
                    updatedAt: '2023-01-04T03:02:56.750Z',
                  },
                },
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
      404: {
        content: {
          // content-type
          'application/json': {
            schema: {
              $ref: '#/components/schemas/404', // todo data model
            },
          },
        },
      },
    },
  },
};
