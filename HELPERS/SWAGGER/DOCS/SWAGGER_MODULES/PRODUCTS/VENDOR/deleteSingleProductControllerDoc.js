module.exports = {
  // operation's method
  delete: {
    security: [
      {
        Bearer: [],
      },
    ],

    tags: ['Vendor | Products'], // operation's tag
    description: 'delete Single store all products ', // short desc
    operationId: 'deleteSingleStoreAllProducts', // unique operation id
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
    requestBody: {},
    // expected responses
    responses: {
      // response code
      200: {
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
      403: {
        content: {
          // content-type
          'application/json': {
            schema: {
              example: {
                payload:
                  'Cannot Delete Product as Product has live or unexpired offer associated with it, take offer offline and expire to delete the product',
              },
            },
          },
        },
      },
    },
  },
};