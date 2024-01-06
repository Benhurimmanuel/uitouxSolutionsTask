module.exports = {
    // operation's method
    get: {
        security: [
            {
                Bearer: [],
            },
        ],

        tags: ['Customer | Products'], // operation's tag
        description: 'get all brands] ', // short desc
        operationId: 'get all brands', // unique operation id
        parameters: [
        ], // expected params

        // expected responses
        responses: {
            // response code
            200: {
                content: {
                    // content-type
                    'application/json': {
                        example: {
                            payload: [{
                                brandName: 'Apple',
                            },
                            {
                                brandName: 'Apple',
                            }],
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
