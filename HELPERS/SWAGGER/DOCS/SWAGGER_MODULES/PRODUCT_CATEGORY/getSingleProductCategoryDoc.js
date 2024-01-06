module.exports = {
    // operation's method
    get: {

        tags: ['Product Category'], // operation's tag
        description: 'Get single Product category Details', // operation's desc.
        operationId: 'getSingleProductCategory', // unique operation id
        parameters: [
            {
                name: 'productcategoryid', // name of the param
                in: 'path', // location of the param
                schema: {
                    $ref: '#/components/schemas/productcategoryid', // data model of the param
                },
                required: true, // Mandatory param
                description: ' product Category Id', // param desc.
            },
        ],
        // expected responses
        responses: {
            // response code
            200: {
                description: 'category  available', // response desc.
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            example: {
                                payload: {
                                    productCategoryId: 'fd7d0d4b-86a4-437d-a885-297e8a161e2c',
                                    productCategoryName: 'category 1',
                                    productCategoryDescription: 'category 1',
                                    productCategoryImageUrl: 'category 1',
                                    isDeleted: false,
                                    createdAt: '2022-05-23T12:20:27.721Z',
                                    updatedAt: '2022-05-23T12:20:27.721Z',
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
