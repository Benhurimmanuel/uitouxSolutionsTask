module.exports = {
    // operation's method
    post: {

        tags: ['Vendor Auth'], // operation's tag
        description: 'forgot password', // short desc
        operationId: 'forgotPassword', // unique operation id
        parameters: [{
            name: 'tokenid', // name of the param
            in: 'path', // location of the param
            schema: {
                $ref: '#/components/schemas/tokenid', // data model of the param
            },
            required: true, // Mandatory param
            description: 'token  Id generated in mail', // param desc.}], // expected params

        }],
        requestBody: {
            // expected request body
            content: {
                // content-type
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            email: {
                                type: 'email',
                                description: 'email id',
                                example: 'test@test.com',
                            },
                        },
                    },
                },
            },
        },
        // expected responses
        responses: {
            200: {
                content: {
                    // content-type
                    'application/json': {
                        example: 'Success',
                    },
                },
            },
            400: {
                content: {
                    // content-type
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/400',
                        },
                    },
                },
            },
        },
    },
};
