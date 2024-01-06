module.exports = {
    // operation's method
    get: {
        security: [
            {
                Bearer: [],
            },
        ],

        tags: ['Customer | Products'], // operation's tag
        description: 'get product by offer percentage] ', // short desc
        operationId: 'getProductsByOfferPercentage', // unique operation id
        parameters: [
            {
                name: 'offerPercentage', // name of the param
                in: 'path', // location of the param
                required: true, // Mandatory param
                description: 'offerPercentage', // param desc.
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
                                        productId: 'a779407c-df5f-4df0-8d35-6da629a21afd',
                                        productName: 'OnePlus Nord CE 2 Lite 5G',
                                        productDescription: '<ul><li>RAM- 6GB</li><li>Storage- 128GB</li><li>Battery Power- 5000mAH</li><li>Screen Type- LCD</li><li>Screen Size 6.5 inches</li></ul>',
                                        brandName: 'OnePlus',
                                        productPrice: 19999,
                                        productSchema: '[{"name":"Battery Capacity","value":"5000mAH"}]',
                                        hsnCode: '',
                                        isOfferAvailable: true,
                                        offerStartDate: '2023-04-01T04:19:01.000Z',
                                        offerEndDate: '2023-04-06T04:19:09.000Z',
                                        discountPercentage: 25,
                                        isOfferExpired: false,
                                        totalStockOnOffer: 5,
                                        claimsMade: 5,
                                        claimsRedeemed: 3,
                                        stockRemainingOnOffer: 2,
                                        selectedDays: '{"Sunday":true,"Monday":true,"Tuesday":true,"Wednesday":true,"Thursday":true,"Friday":true,"Saturday":true}',
                                        isOfferLive: true,
                                        isOfferPromoted: false,
                                        approvalStatus: 1,
                                        adminResponseDate: null,
                                        adminRemark: null,
                                        isDeleted: false,
                                        isDeliveryAvailable: false,
                                        isReturnDetailsAvailable: false,
                                        productAddedBy: 'admin',
                                        gstPercentage: 0,
                                        createdAt: '2023-03-26T04:25:53.025Z',
                                        updatedAt: '2023-04-04T07:53:47.685Z',
                                        storeDetailStoreId: 'f643e9e0-5894-4f4e-aa15-698b1b21104b',
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
                                        termsConditionsDetails: [
                                            {
                                                termsConditionsId: 'a541c08e-6356-4b3d-a9db-ee9152d76b6e',
                                                description: '<ul><li>EMI from 1000. No cost EMI(Inclusive of all taxes)</li><li>Cashback of 1500 on credit cards.</li><li>Exchange of previous phone <strong>NOT</strong> available.</li></ul><p><br></p>',
                                                isDeleted: false,
                                                createdAt: '2023-03-26T04:25:53.071Z',
                                                updatedAt: '2023-03-26T04:25:53.071Z',
                                                productDetailProductId: 'a779407c-df5f-4df0-8d35-6da629a21afd',
                                            },
                                        ],
                                        additionalProductDetail: {
                                            additionalProductDetailsId: 'ebaa2880-da64-48b4-8f69-c9ed32777c33',
                                            productDimension: 'NaN x NaN x NaN',
                                            productWeight: 'NaN',
                                            deliveryInstruction: '',
                                            returnPolicy: '',
                                            returnDays: 0,
                                            isDeleted: false,
                                            createdAt: '2023-03-26T04:25:53.075Z',
                                            updatedAt: '2023-03-26T04:25:53.075Z',
                                            productDetailProductId: 'a779407c-df5f-4df0-8d35-6da629a21afd',
                                        },
                                        fileUploads: [
                                            {
                                                fileUploadId: '9865fd72-7202-4bb2-8e9d-c415e20e6bfe',
                                                fileName: 'f643e9e0-5894-4f4e-aa15-698b1b21104b_26_Mar_2023_09_47_54_AM_dp',
                                                fileUploadUrl: 'https://muqabala.s3.ap-south-1.amazonaws.com/f643e9e0-5894-4f4e-aa15-698b1b21104b_26_Mar_2023_09_47_54_AM_dp.jpeg',
                                                isDisplayPicture: true,
                                                uploadType: 'image',
                                                isDeleted: false,
                                                createdAt: '2023-03-26T04:25:53.066Z',
                                                updatedAt: '2023-03-26T04:25:53.066Z',
                                                productDetailProductId: 'a779407c-df5f-4df0-8d35-6da629a21afd',
                                                bountyFeatureDetailBountyFeatureDetailId: null,
                                            },
                                        ],
                                        storeDetail: {
                                            storeId: 'f643e9e0-5894-4f4e-aa15-698b1b21104b',
                                            storeName: 'TS Enterprise',
                                            storeEmail: 'anymail@gmail.com',
                                            storePhoneNumber: '0',
                                            storeAddress: 'No. 15, 308, 100 Feet Rd, Indira Nagar 1st Stage, H Colony, Indiranagar, Bengaluru, Karnataka 560038, India',
                                            pincode: '560038',
                                            latitude: 12.980972,
                                            longitude: 77.64047,
                                            gstNumber: 'NA Fr-Mar-2023 02:42 pm',
                                            storeTiming: '[{"label":"Sunday","startTiming":"","endTiming":"","openStatus":"Closed"},{"label":"Monday","startTiming":"2023-03-17T03:30:07.688Z","endTiming":"2023-03-17T16:30:07.688Z","openStatus":""},{"label":"Tuesday","startTiming":"2023-03-17T03:30:07.688Z","endTiming":"2023-03-17T16:30:07.688Z","openStatus":""},{"label":"Wednesday","startTiming":"2023-03-17T03:30:07.688Z","endTiming":"2023-03-17T16:30:07.688Z","openStatus":""},{"label":"Thursday","startTiming":"2023-03-17T03:30:07.688Z","endTiming":"2023-03-17T16:30:07.688Z","openStatus":""},{"label":"Friday","startTiming":"2023-03-17T03:30:07.688Z","endTiming":"2023-03-17T16:30:07.688Z","openStatus":""},{"label":"Saturday","startTiming":"2023-03-17T03:30:07.688Z","endTiming":"2023-03-17T16:30:07.688Z","openStatus":""}]',
                                            isStoreProfileCompleted: true,
                                            isPrimaryStore: true,
                                            isDeleted: false,
                                            createdAt: '2023-03-17T09:11:28.257Z',
                                            updatedAt: '2023-03-17T09:13:14.342Z',
                                            storeCategoryDetailStoreCategoryId: 'dcf6ff0e-a607-4b74-aa84-82e93bfd6580',
                                            companyDetailCompanyId: 'f661d3cc-8417-43ff-899e-29573c660321',
                                            cityDetailCityId: 'd38d55c4-aa6d-4dcd-965b-8a91803392a6',
                                        },
                                    }, ,
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
