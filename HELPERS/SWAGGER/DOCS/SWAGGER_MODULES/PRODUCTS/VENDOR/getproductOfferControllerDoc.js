module.exports = {
    // operation's method
    get: {
        security: [
            {
                Bearer: [],
            },
        ],

        tags: ['Vendor | Products'], // operation's tag
        description: 'get all products with and without offers ', // short desc
        operationId: 'getAllProductOffer', // unique operation id
        parameters: [], // expected params
        // expected responses
        responses: {
            // response code
            200: {
                content: {
                    // content-type
                    'application/json': {
                        example: {
                            payload: [
                                {
                                    productId: 'f46811cb-0ef3-460c-843e-4dff85d173b7',
                                    productName: 'acer Laptop',
                                    productDescription: 'laptop is rectangular in shape',
                                    productDisplayImage: 'ahttps://images.unsplash.com/photo-1652088056798-9162e4c044a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60cer Laptop',
                                    productPrice: 78,
                                    brand: '20',
                                    numberOfOffersLive: 0,
                                    isDeleted: false,
                                    createdAt: '2022-05-14T14:20:48.863Z',
                                    updatedAt: '2022-05-14T14:20:48.863Z',
                                    productSubCategoryDetailProductSubCategoryId: '0253a756-7fb7-4eb8-ab89-26f4e0668cc2',
                                    storeDetailStoreId: 'fb5825e0-cf31-4280-a17d-e47229ad659c',
                                    productSubCategoryDetail: {
                                        productSubCategoryId: '0253a756-7fb7-4eb8-ab89-26f4e0668cc2',
                                        productSubCategoryName: 'subCategory 2',
                                        productSubCategoryImageUrl: 'qwert',
                                        isDeleted: false,
                                        createdAt: '2022-05-14T13:44:11.511Z',
                                        updatedAt: '2022-05-14T13:44:11.511Z',
                                        productCategoryDetailProductCategoryId: '72a6030b-3e63-4b4d-894d-77ab2bba5a84',
                                        productCategoryDetail: {
                                            productCategoryI: 'category 1',
                                            productCategoryN: 'category 1',
                                            productCategoryD: 'category 1',
                                            isDeleted: false,
                                            createdAt: '2022-05-14T13:43:43.679Z',
                                            updatedAt: '2022-05-14T13:43:43.679Z',
                                        },
                                    },
                                    productImages: [],
                                    storeDetail: {
                                        storeId: 'fb5825e0-cf31-4280-a17d-e47229ad659c',
                                        storeName: '123456',
                                        storeAddress: '92 Stang Avenue',
                                        location: 'Test Company Name',
                                        pincode: '123456',
                                        storeFrontImage: 'https://images.unsplash.com/photo-1652088056798-9162e4c044a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
                                        storePhoneNumber: '1234567890',
                                        storeEmail: 'store@test.com',
                                        isDeleted: false,
                                        createdAt: '2022-05-14T13:22:47.728Z',
                                        updatedAt: '2022-05-14T13:32:27.220Z',
                                        companyDetailCompanyId: 'fc81e4a5-1d25-4374-b974-33ef16af3a8d',
                                    },
                                },
                            ],
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
