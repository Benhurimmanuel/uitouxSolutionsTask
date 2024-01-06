module.exports = {
  components: {
    asdsa: {
      companyid: {
        type: 'string',
        description: 'An id for the vendor',
      },
    },
    schemas: {
      companyid: {
        type: 'string',
        description: 'An id for the vendor',
      },
      storeid: {
        type: 'string',
        description: 'An id for the vendor',
      },
      productcategoryid: {
        type: 'string',
        description: 'An id for the vendor',
      },
      productsubcategoryid: {
        type: 'string',
        description: 'An id for the vendor',
      },

      productid: {
        type: 'string',
        description: 'An id for the vendor',
      },
      offerid: {
        type: 'string',
        description: 'An id for the vendor',
      },
      tokenid: {
        type: 'string',
        description: 'An id for the vendor',
      },
      storecategoryid: {
        type: 'string',
        description: 'An id for the vendor',
      },
      vendorregistrationid: {
        type: 'string',
        description: 'An id for the vendor',
      },
      claimid: {
        type: 'string',
        description: 'An id for the claim',
      },
      monthnumber: {
        type: 'string',
        description: 'month value in mm format',
      },
      year: {
        type: 'string',
        description: 'year value in yyyy format',
      },
      id: {
        type: 'string',
        description: 'id value to which transactions should be based on',
      },
      ddmmyyyy: {
        type: 'string',
        description: 'date based on dd-mm-yyyy  format',
      },
      querybasedon: {
        type: 'string',
        description: '0,1,2=>storeId,companyId,offerId',
      },
      numberof: {
        type: 'string',
        description: 'n value of the search query',
      },
      startdate: {
        type: 'string',
        description: 'startdate fo the query in dd-mm-yyyy format',
      },
      enddate: {
        type: 'string',
        description: 'enddate fo the query in dd-mm-yyyy format',
      },
      employeetype: {
        type: 'string',
        description: '0,1,2=>owner,manager,employee',
      },
      storeimageid: {
        type: 'string',
        description: 'An id for the store image',
      },
      fileuploadid: {
        type: 'string',
        description: 'An id for the product image',
      },
      cityid: {
        type: 'string',
        description: 'An id for the common',
      },
      paymentid: {
        type: 'string',
        description: "payment id"
      },
      serviceid: {
        type: 'string',
        description: "service id"
      },
      productcategoryid: {
        type: 'string',
        description: "productcategory id"
      },
      startdate: {
        type: 'string',
        description: "start date"
      },
      enddate: {
        type: 'string',
        description: "end date"
      },
      querytype: {
        type: 'string',
        description: "querytype"
      },
      stores: {
        type: 'object',
        properties: {
          latitude: {
            type: 'Real',
            description: 'GPS coordinates',
            example: '28.123456',
          },
          longitude: {
            type: 'Real',
            description: 'GPS coordinates',
            example: '98.123456',
          },
          pincode: {
            type: 'integer',
            description: 'pincode of the store',
            example: '123456',
          },
          storeFrontImage: {
            type: 'string',
            description: 'storeFront/ display Image url',
            example:
              'https://images.unsplash.com/photo-1652088056798-9162e4c044a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
          },
          storePhoneNumber: {
            type: 'integer',
            description: 'contact phone Number of the store',
            example: '1234567890',
          },
          storeEmail: {
            type: 'string',
            description: 'contact email id of the store',
            example: 'store@test.com',
          },
          storeName: {
            type: 'string',
            description: 'name of store',
            example: 'test name',
          },
          storeAddress: {
            type: 'string',
            description: 'address of store',
            example: 'test address',
          },
          storeCategoryId: {
            type: 'string',
            description: 'category to which the store belongs to ',
          },
          managedBy: {
            type: 'string',
            description: 'email id of the manager',
            example: 'emp@test.com',
          },
        },
      },
      //   {
      //     "firstName": "Dhaval",
      //     "lastName": "Vira",
      //     "profilePictureUrl": ""
      // }
      customers: {
        type: 'object',
        properties: {
          latitude: {
            type: 'number',
            description: 12.1212,
            example: 12.12,
          },
          longitude: {
            type: 'number',
            description: 12112,
            example: 12.1231,
          },
          isPrimaryAddress: {
            type: 'boolean',
            description: true,
            example: true,
          },
        },
      },
      searchProductStore: {
        type: "object",
        properties: {
          queryType: {
            type: "string",
            description: "store/product",
            example: "store"
          },
          query: {
            type: "number",
            description: "",
            example: ""
          },
        }
      },
      employees: {
        type: 'object',
        properties: {
          employeeName: {
            type: 'String',
            description: 'Employee Name',
            example: 'John Doe',
          },
          employeeEmail: {
            type: 'string',
            description: 'email of the employee',
            example: 'Employee@test.com',
          },
          employeeType: {
            type: 'integer',
            description: 'employee type, 0/1/2=> admin/manager/employee',
            example: 2,
          },
        },
      },
      customeraddressid: {
        type: 'object',
        properties: {
          customeraddressid: {
            type: "String",
            description: "customer address id"
          }
        }
      },
      // products model
      products: {
        type: 'object',
        properties: {
          productName: {
            type: 'string',
            description: 'name of Product',
            example: 'acer Laptop',
            allowNull: false,
          },
          productSchema: {
            type: 'string',
            description: 'product schema',
            example: "[{name': 'string'}, {'price': 'string'}]",

            allowNull: false,
          },
          productDescription: {
            type: 'text',
            description: 'description about product',
            example: 'laptop is rectangular in shape',
            allowNull: false,
          },
          productPrice: {
            type: 'floar',
            description: 'price of the product',
            example: '78.00',
            allowNull: false,
          },
          productDisplayImage: {
            type: 'string',
            description: 'product display image url',
            example:
              'https://images.unsplash.com/photo-1652088056798-9162e4c044a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60cer Laptop',
            allowNull: false,
          },
          brand: {
            type: 'string',
            description: 'brand which product belongs to',
            example: '20',
            allowNull: false,
          },
        },
      },
      // offers model
      offers: {
        type: 'object',
        properties: {
          offerStartDate: {
            type: 'string',
            description: 'offer start Date',
            example: '2021-12-27 12:18:49.342+00',
          },
          offerEndDate: {
            type: 'string',
            description: 'offer End Date',
            allowNull: false,
            example: '2021-12-27 12:18:49.342+00',
          },
          offerDisplayImageUrl: {
            type: 'string',
            description: 's3 url of the offer Image',
            allowNull: false,
            example:
              'https://images.unsplash.com/photo-1652088056798-9162e4c044a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
          },
          discountPercentage: {
            type: 'integer',
            description: 'discount value in percentage',
            allowNull: false,
            example: '20',
          },
          totalStockOnOffer: {
            type: 'integer',
            description: 'total stocks put on offer',
            allowNull: false,
            example: '100',
          },
          termsConditions: {
            type: 'string',
            description: 'terms conditions associated with offer',
            example: 'offer valid till, offer only applicable if',
          },
        },
      },
      paymentDetails: {
        type: 'object',
        properties: {},
      },
      reviewDetails: {
        type: 'object',
        properties: {
          storeId: {
            type: 'string',
            description: 'store id',
            allowNull: true,
            example: '4be7c969-6133-4c68-9fc9-ea612be98af0',
          },
          productId: {
            type: 'string',
            description: 'product id',
            allowNull: true,
            example: '4be7c969-6133-4c68-9fc9-ea612be98af0',
          },
          servicesId: {
            type: 'string',
            description: 'service id',
            allowNull: true,
            example: '4be7c969-6133-4c68-9fc9-ea612be98af0',
          },
          reviewDescription: {
            type: 'string',
            description: 'review Description',
            allowNull: true,
            example: 'good product',
          },
          starRating: {
            type: 'number',
            description: 'starRating',
            allowNull: true,
            example: '3.5',
          },
          imageURLS: {
            type: 'array',
            description: 'imageURLS',
            allowNull: true,
            example: ['www.awsS3.url', 'www.awsS3.url'],
          },
        },
      },
      updateReviewDetails: {
        type: 'object',
        properties: {
          reviewDescription: {
            type: 'string',
            description: 'review Description',
            allowNull: true,
            example: 'good product',
          },
          starRating: {
            type: 'number',
            description: 'starRating',
            allowNull: true,
            example: '3.5',
          },
        },
      },
      queryType: {
        type: 'string',
        description: 'queryType to determine the id as product / service/ store id',
      },
      reviewid: {
        type: 'string',
        description: 'review id',
      },
      basketid: {
        type: 'string',
        description: 'basket id',
      },
      couponid: {
        type: 'string',
        description: 'coupon id',
      },
      reviewImages: {
        type: 'array',
        description: 'images of reviews',
        example: ['www.awsS3.url', 'www.awsS3.url'],
      },
      deleteImages: {
        type: 'array',
        description: 'images of reviews',
        example: ['id', 'id'],
      },
      // // claims model
      // claims: {
      //     type: 'object',
      //     properties: {
      //         claimStatus: {
      //             type: 'integer',
      //             description: 'claims status for claim',
      //             default: 0,
      //             example: '0/1/2=>claimed/expired/cancelled',
      //         },
      //         remarks: {
      //             type: 'text',
      //             description: 'remarks about the offer by admin',
      //             example: 'offer has been approved for extension',
      //         },
      //     },
      // },
      //             //favorites
      //             // favorites: {
      //             //     type: 'object',
      //             //     properties: {
      //             //         favoriteId: {
      //             //             type: 'uuid',
      //             //             description: 'uuid generated at the time of database insertion of favorite',
      //             //             example: 'b0361ed5-c3b4-421a-a4a9-7a7b5b7306ed',
      //             //         },
      //             //         isDeleted: {
      //             //             type: 'boolean',
      //             //             description: 'boolean value to mark if favorite is deleted',
      //             //             example: false,
      //             //         },
      //             //         createdAt: {
      //             //             type: 'string',
      //             //             description: 'date of creation',
      //             //             example: "2022-03-28 04:16:36.751+00"
      //             //         },
      //             //         updatedAt: {
      //             //             type: 'string',
      //             //             description: 'date of last update',
      //             //             example: "2022-03-28 04:16:36.751+00"
      //             //         },
      //             //     },
      //             // },
      //             //redeems
      //             // redeems: {
      //             //     type: 'object',
      //             //     properties: {
      //             //         redeemId: {
      //             //             type: 'uuid',
      //             //             description: 'uuid generated at the time of database insertion of redeem',
      //             //             example: 'b0361ed5-c3b4-421a-a4a9-7a7b5b7306ed',
      //             //         },
      //             //         isDeleted: {
      //             //             type: 'boolean',
      //             //             description: 'boolean value to mark if redeem is deleted',
      //             //             example: false,
      //             //         },
      //             //         createdAt: {
      //             //             type: 'string',
      //             //             description: 'date of creation',
      //             //             example: "2022-03-28 04:16:36.751+00"
      //             //         },
      //             //         updatedAt: {
      //             //             type: 'string',
      //             //             description: 'date of last update',
      //             //             example: "2022-03-28 04:16:36.751+00"
      //             //         },
      //             //     },
      //             // },

      //             //reviews
      //             reviews: {
      //                 type: 'object',
      //                 properties: {
      //                     reviewId: {
      //                         type: 'uuid',
      //                         description: 'uuid generated at the time of database insertion of review',
      //                         example: 'b0361ed5-c3b4-421a-a4a9-7a7b5b7306ed',
      //                     },
      //                     starRating: {
      //                         type: 'integer',
      //                         description: 'star rating out of 5',
      //                         example: '3',
      //                     },
      //                     reviewDescription: {
      //                         type: 'text',
      //                         description: 'reveiw in detail',
      //                         example: 'laptop makes sound when turning on, laptop shows picture in screen',
      //                     },
      //                     isDeleted: {
      //                         type: 'boolean',
      //                         description: 'boolean value to mark if redeem is deleted',
      //                         example: false,
      //                     },
      //                     createdAt: {
      //                         type: 'string',
      //                         description: 'date of creation',
      //                         example: "2022-03-28 04:16:36.751+00"
      //                     },
      //                     updatedAt: {
      //                         type: 'string',
      //                         description: 'date of last update',
      //                         example: "2022-03-28 04:16:36.751+00"
      //                     },
      //                 },
      //             },

      //             Images: {
      //                 type: 'object',
      //                 properties: {

      //                     imageUrl: {
      //                         type: 'string',
      //                         description: 'url of vendor image',
      //                         example: 'https://images.unsplash.com/photo-1652088056798-9162e4c044a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      //                     },

      //                 },
      //             },

      // error model
      400: {
        type: 'object',
        properties: {
          payload: {
            type: 'string',
            description: 'Error message',
            example: 'Unsuccessful', // example of an error message
          },
        },
      },
      401: {
        type: 'object',
        properties: {
          payload: {
            type: 'string',
            description: 'Error message',
            example: 'user unauthorized', // example of an error message
          },
        },
      },
      403: {
        type: 'object',
        properties: {
          payload: {
            type: 'string',
            description: 'Error message',
            example: 'Forbidden, cannot do the action', // example of an error message
          },
        },
      },
      404: {
        type: 'object',
        properties: {
          payload: {
            type: 'string',
            description: 'Error message',
            example: 'process unsuccesful due to duplicate Entry', // example of an error message
          },
        },
      },
      409: {
        type: 'object',
        properties: {
          payload: {
            type: 'string',
            description: 'Error message',
            example: 'File not found', // example of an error message
          },
        },
      },
    },
    securitySchemes: {
      Bearer: {
        type: 'http',
        name: 'Autherization',
        in: 'header',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
};
