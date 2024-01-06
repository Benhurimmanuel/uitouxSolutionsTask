module.exports = {
    // operation's method
    get: {

        tags: ['Product Category'], // operation's tag
        description: 'gives all product categories', // short desc
        operationId: 'getAllProductCategories', // unique operation id
        parameters: [], // expected params
        // expected responses
        responses: {
            // response code
            201: {
                description: 'All Product Categories are brought here', // response desc
                content: {
                    // content-type
                    'application/json': {
                        schema: {
                            type: 'object',
                            example: {
                                payload: [
                                    {
                                        productCategoryId: 'fd7d0d4b-86a4-437d-a885-297e8a161e2c',
                                        productCategoryName: 'category 1',
                                        productCategoryDescription: 'category 1',
                                        productCategoryImageUrl: 'category 1',
                                        isDeleted: false,
                                        createdAt: '2022-05-23T12:20:27.721Z',
                                        updatedAt: '2022-05-23T12:20:27.721Z',
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
