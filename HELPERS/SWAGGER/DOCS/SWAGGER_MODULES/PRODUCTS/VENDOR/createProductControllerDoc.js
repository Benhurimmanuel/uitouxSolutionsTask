module.exports = {
  // operation's method
  post: {
    security: [
      {
        Bearer: [],
      },
    ],

    tags: ['Vendor | Products'], // operation's tag
    description: 'add product ', // short desc
    operationId: 'addProduct', // unique operation id
    parameters: [
      {
        name: 'storeid', // name of the param
        in: 'path', // location of the param
        schema: {
          $ref: '#/components/schemas/storeid', // data model of the param
        },
        required: true, // Mandatory param
        description: 'Store Id', // param desc.
      },
    ], // expected params
    requestBody: {
      // expected request body
      content: {
        // content-type
        'application/json': {
          schema: {
            type: 'object',
            example: {
              productDetail: {
                productName: 'iPhone 14 Pro Max',
                productDescription: '<p>Apple iPhone 14 Pro Max 256GB</p>',
                brandName: 'Apple',
                productPrice: '125000',
                productSchema: '[{"name":"","value":""}]',
                hsnCode: '',
                isOfferAvailable: true,
                offerStartDate: '2023-02-27T13:01:42.535Z',
                offerEndDate: '2023-02-27T13:01:42.535Z',
                discountPercentage: 25,
                totalStockOnOffer: 25,
                selectedDays:
                  "{'Sunday': 'false', 'Monday': 'false', 'Tuesday': 'false', 'Wednesday': 'false', 'Thursday': 'false', 'Friday': 'false', 'Saturday': 'true'}",
                isDeliveryAvailable: true,
                productSubCategoryProductSubCategoryId:
                  '139b2be8-5d76-47e6-b1c9-ce41c183dced',
                isReturnDetailsAvailable: true,
                productAddedBy: 'vendor',
              },
              image: {
                fileName: 'abc',
                fileUploadUrl:
                  'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-max-gold-witb-202209_FMT_WHH?wid=560&hei=744&fmt=jpeg&qlt=90&.v=1660789320487',
                isDisplayPicture: true,
              },
              termsConditionsDetails: {
                description: '<p>T&C</p>',
              },
              additionalProductDetails: {
                productDimension: '25cm x 25cm x 25cm',
                productWeight: '1kg',
                deliveryInstruction: 'Handle with Care',
                returnPolicy:
                  'Return will only be accepted if the Product comes with Manufacturing Defect',
                returnDays: 7,
              },
            },
          },
        },
      },
    },
    // expected responses
    responses: {
      // response code
      201: {
        content: {
          // content-type
          'application/json': {
            example: {
              payload: {
                productDetail: {
                  productName: 'iPhone 14 Pro Max',
                  productDescription: '<p>Apple iPhone 14 Pro Max 256GB</p>',
                  brandName: 'Apple',
                  productPrice: '125000',
                  productSchema: '[{"name":"","value":""}]',
                  hsnCode: '',
                  isOfferAvailable: true,
                  offerStartDate: '2023-02-27T13:01:42.535Z',
                  offerEndDate: '2023-02-27T13:01:42.535Z',
                  discountPercentage: 25,
                  totalStockOnOffer: 25,
                  selectedDays:
                    "{'Sunday': 'false', 'Monday': 'false', 'Tuesday': 'false', 'Wednesday': 'false', 'Thursday': 'false', 'Friday': 'false', 'Saturday': 'true'}",
                  isDeliveryAvailable: true,
                  productSubCategoryProductSubCategoryId:
                    '139b2be8-5d76-47e6-b1c9-ce41c183dced',
                  isReturnDetailsAvailable: true,
                  productAddedBy: 'vendor',
                },
                image: {
                  fileName: 'abc',
                  fileUploadUrl:
                    'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-max-gold-witb-202209_FMT_WHH?wid=560&hei=744&fmt=jpeg&qlt=90&.v=1660789320487',
                  isDisplayPicture: true,
                },
                termsConditionsDetails: {
                  description: '<p>T&C</p>',
                },
                additionalProductDetails: {
                  productDimension: '25cm x 25cm x 25cm',
                  productWeight: '1kg',
                  deliveryInstruction: 'Handle with Care',
                  returnPolicy:
                    'Return will only be accepted if the Product comes with Manufacturing Defect',
                  returnDays: 7,
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
    },
  },
};
